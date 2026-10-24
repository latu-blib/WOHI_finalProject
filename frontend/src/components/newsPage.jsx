import {MarketsButton, NewsButton, WatchListButton} from "./header_buttons.jsx";
import React, {useEffect, useState} from "react";
import {getData} from "../api/marketApi.js";

export default function NewsPage() {
    const [article, setArticle] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        async function loadNews() {
            try {
                const data = await getData("news");
                setArticle(data.data)
            } catch (error) {
                console.log("Fetch failed", error);
            }
        }
        loadNews();
    }, []);

    function ArticleModal({article, onClose}) {
        useEffect(() => {
            function handleKeyDown(event) {
                if (event.key === "Escape") {onClose();
                }
            }
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
            }
        }, [onClose]);

        if (!article) {
            return null;
        }
        return (
            <div className="modalBackground">
                <article className="articleModal">
                    <button className="closeButton" onClick={onClose}>
                        X
                    </button>
                    <p>Source: {article.source}</p>
                    <p>URL: {article.url}</p>
                </article>
            </div>

        );
    }

    return (
        <>
            <nav className="nav nav-pills justify-content-center gap-3 p-3 bg-light">
                <MarketsButton />
                <NewsButton />
                <WatchListButton />
            </nav>

            <nav id="newsFeed">
                <ul>
                    {article.map(article=>(
                        <li key={article.uuid} onClick={() => setSelectedArticle(article)} className="newsItem"
                        >
                            <h3 className="newsTitle">
                                {article.title} </h3>
                            <p className="snippet">
                                {article.snippet} </p>
                        </li>
                    ))
                    }

                </ul>
            </nav>
            <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)}
            />
            <p>
                <i>Click titles for source and URL</i>
            </p>
        </>
    );
}
