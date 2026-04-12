import catGif from "../../assets/hanging-cat.gif";
import loadingGif from "../../assets/loading.gif";
import "./loading.css";

export default function Loading() {
  return (
    <div className="trycatch-loading-container">
      <h2>Reviewing your code</h2>
      <img alt="" src={loadingGif} />
      <p>Please sit tight. This is a free API, so it's not the fastest.</p>
      <img alt="" className="trycatch-loading-cat" src={catGif} />
    </div>
  );
}
