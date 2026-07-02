import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import data from "./data/data.json";
import Card from "./components/card.jsx";
import Details from "./components/details.jsx";
import "./App.css";

function App() {
  // console.log("data", data.site.name);

  const siteName = data.site.name;
  const tagLine = data.site.tagline;
  const mainHeroImg = data.site.heroImage;

  const [desc, showDesc] = useState(false);

  const [descID, setDescID] = useState("");

  const handleDesc = (id) => {
    setDescID(
      data.countries.map((item) => {
        return item.id == id ? (
          <>
            <div
              className="popup-hero"
              style={{
                backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.35),
        rgba(0, 0, 0, 0.85)
      ),
      url(${item.image})
    `,
              }}
            >
              <h2>{item.name}</h2>

              <p>
                🏛️ <strong>Capital:</strong> {item.capital}
              </p>

              <p>
                🌍 <strong>Continent:</strong> {item.continent}
              </p>

              <p>
                🏆 <strong>Famous Wonder:</strong> {item.wonder}
              </p>
            </div>

            <p className="popup-description">{item.description}</p>
          </>
        ) : (
          ""
        );
      }),
    );
  };

  const closeDesc = (e) => {
    e.preventDefault();
    setDescID("");
  };

  const countries = data.countries.map((item) => {
    return <Card key={item.id} {...item} handleDesc={handleDesc} />;
  });

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div className="w-100">
          <img src={mainHeroImg} className="hero-img" />
          <h1>{siteName}</h1>
          <p>{tagLine}</p>
        </div>
      </section>
      <section className="posts">{countries}</section>
      <section id="center">
        <button type="button" className="counter">
          Explore More...
        </button>

        {descID && (
          <>
            {" "}
            <div className="desc">
              {descID}{" "}
              {
                <a href="#" className="desc-close" onClick={closeDesc}>
                  X
                </a>
              }
            </div>
          </>
        )}
      </section>
      <div className="ticks"></div>
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
