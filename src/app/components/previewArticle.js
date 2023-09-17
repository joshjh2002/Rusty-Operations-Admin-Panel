// CSS //
import "../globals.css";

export default function PreviewArticle() {
  return (
    <section className="m-4">
      <div className="block items-center justify-center text-center border-2 rounded-md border-solid border-black">
        <h1 className="rusty-font uppercase text-xl font-bold underline">
          Preview Articles
        </h1>
        <p>
          Use this option to preview your articles and edit them in real-time.
        </p>
        <p className="font-bold">
          Be aware that this is for previewing only. If you leave the page, your
          data will be lost.
        </p>
        <button
          className="border-2 border-black rounded-md p-2 m-2"
          onClick={() => window.open("/dashboard/preview", "_blank")}
        >
          Go to Preview
        </button>
      </div>
    </section>
  );
}
