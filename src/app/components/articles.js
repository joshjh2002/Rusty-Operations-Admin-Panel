// DEPENDENCIES //
import { useEffect, useState } from "react";
import { db } from "../firebaseInit.js";
import { ref, onValue, set, remove } from "firebase/database";

export default function ServiceAlerts() {
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
      file: "",
      id: articles[articles.length],
    });

    articles.forEach((article) => {
      console.log(article.id, article);
      set(ref(db, type + "/" + article.id), article);
    });
  };

  return (
    <section
      className="m-4 mt-12 p-4 border-2 border-black rounded-md"
      id="articles"
    >
      <div className="grid grid-cols-2 gap-4">
        <button
          className={`border-2 border-black ${
            type == "news" ? "bg-black text-white" : ""
          } rounded-md p-2 `}
          onClick={() => setType("news")}
        >
          News
        </button>
        <button
          className={`border-2 border-black ${
            type == "forums" ? "bg-black text-white" : ""
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

  if (!articles) return;

  return articles.map((article) => (
    <div
      className="mt-4 border-2 border-black rounded-md p-2"
      key={`${article.file}-div`}
    >
      <div>
        <label>File </label>
        <input
          key={`${article.file}-input`}
          className={inputStyle}
          onChange={(e) => {
            article.file = e.target.value;
          }}
          type="text"
          defaultValue={article.file}
        ></input>
      </div>
      <button
        className="border-2 border-black rounded-md p-2 m-4"
        onClick={() => remove(ref(db, type + "/" + article.id))}
        key={`${article.file}-button`}
      >
        Delete
      </button>
      <p>{}</p>
    </div>
  ));
}
