// DEPENDENCIES //
import { auth } from "../firebaseInit.js";
import { useEffect, useState } from "react";
import { db } from "../firebaseInit.js";
import { ref, onValue, set, remove } from "firebase/database";

export default function Articles() {
  const [type, setType] = useState("news");
  const [articles, setArticles] = useState([]);

  // Check if user is logged in
  useEffect(() => {
    const articlesRef = ref(db, type);
    onValue(articlesRef, (snapshot) => {
      const data = snapshot.val();
      let temp = [];
      temp = data;
      setArticles(temp);
    });
  }, [setType, type]);

  const writeArticles = () => {
    articles.forEach((article) => {
      set(ref(db, type + "/" + article.id), article);
    });
  };

  const newArticle = () => {
    articles.push({
      id: articles.length,
      title: "",
      description: "",
      image: "",
      alt: "",
      file: "",
      timestamp: "",
    });

    articles.forEach((article) => {
      set(ref(db, type + "/" + article.id), article);
    });
  };

  return (
    <section className="m-4" id="articles">
      <div className="grid grid-cols-2 gap-4">
        <button
          className={`border-2 border-${
            type == "news" ? "[var(--rust-accent)]" : "black"
          } rounded-md p-2 `}
          onClick={() => setType("news")}
        >
          News
        </button>
        <button
          className={`border-2 border-${
            type == "forums" ? "[var(--rust-accent)]" : "black"
          } rounded-md p-2 `}
          onClick={() => setType("forums")}
        >
          Forums
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <div className="grid grid-cols-2 gap-4">{Article(articles, type)}</div>
        <button
          className="border-2 border-black rounded-md p-2"
          onClick={newArticle}
        >
          New
        </button>
        <button
          className="border-2 border-black rounded-md p-2"
          onClick={writeArticles}
        >
          Save
        </button>
      </div>
    </section>
  );
}

function Article(articles, type) {
  const inputStyle = "w-[100%] border border-black rounded-md p-2";

  if (articles == null) return;

  return articles.map((article) => (
    <div
      className="mt-4 border-2 border-black rounded-md p-2"
      key={`${article.id}`}
    >
      <div>
        <label>Title: </label>
        <input
          key={article.title}
          className={inputStyle}
          onChange={(e) => {
            article.title = e.target.value;
          }}
          type="text"
          defaultValue={article.title}
        ></input>
      </div>
      <div>
        <label>Description: </label>
        <input
          key={article.description}
          className={inputStyle}
          onChange={(e) => {
            article.description = e.target.value;
          }}
          type="text"
          defaultValue={article.description}
        ></input>
      </div>
      <div>
        <label>Image URL: </label>
        <input
          key={article.image}
          className={inputStyle}
          onChange={(e) => {
            article.image = e.target.value;
          }}
          type="text"
          defaultValue={article.image}
        ></input>
      </div>
      <div>
        <label>Image Alt Text: </label>
        <input
          key={article.alt}
          className={inputStyle}
          onChange={(e) => {
            article.alt = e.target.value;
          }}
          type="text"
          defaultValue={article.alt}
        ></input>
      </div>
      <div>
        <label>File URL: </label>
        <input
          key={article.file}
          className={inputStyle}
          onChange={(e) => {
            article.file = e.target.value;
          }}
          type="text"
          defaultValue={article.file}
        ></input>
      </div>
      <div>
        <label>Timestamp: </label>
        <input
          key={article.timestamp}
          className={inputStyle}
          onChange={(e) => {
            article.timestamp = e.target.value;
          }}
          type="text"
          defaultValue={article.timestamp}
        ></input>
      </div>
      <button
        className="border-2 border-black rounded-md p-2 m-4"
        onClick={() => remove(ref(db, type + "/" + article.id))}
      >
        Delete
      </button>
    </div>
  ));
}
