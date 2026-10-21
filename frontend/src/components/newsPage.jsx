import {MarketsButton, NewsButton, WatchListButton} from "./header_buttons.jsx";
import React, {useEffect, useState} from "react";

export default function NewsPage() {
    const [article, setArticle] = useState([null])

    const articles = [
        {
            id : 0,
            title : "Koira söi läksyni",
            text : "Ei pidä paikkaansa."
        },
        {
            id : 1,
            title : "Ranska palaa.",
            text : "opiskelijoita vai ei.",
        }
    ];

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
                    {articles.map(article=>(
                        <li key={article.id} onClick={() => setArticle(article)}
                        >
                            {article.title}
                        </li>
                    ))
                    }

                </ul>
            </nav>
            <ArticleModal article={article} onClose={() => setArticle(null)}
            />
        </>
    );
}
