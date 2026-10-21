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
                setArticle(data)
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
            <div className={"modalBackground"}>
                <article className={"articleModal"}>
                    <button className={"closeButton"} onClick={onClose}>
                        X
                    </button>
                    <h2>{article.title}</h2>
                    <p>{article.text}</p>
                </article>
            </div>

        );
    }

    return (
        <>
            <div className="hero">
                <MarketsButton />
                <NewsButton />
                <WatchListButton />
            </div>

            <nav id="newsFeed">
                <ul>
                    {article.map(article=>(
                        <li key={article.id} onClick={() => setSelectedArticle(article)}
                        >
                            {article.title}
                        </li>
                    ))
                    }

                </ul>
            </nav>
            <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)}
            />
        </>
    );
}
