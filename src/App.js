import React, { useState } from "react";
import "./styles.css";

const movieAction = [
  {
    movie: "Avengers",
    rating: "8.0",
    desc:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
  },
  {
    movie: "Hitman",
    rating: "6.3",
    desc:
      "A gun-for-hire known only as Agent 47 hired by a group known only as 'The Organization' is ensnared in a political conspiracy, which finds him pursued by both Interpol and the Russian military as he treks across Russia and Eastern Europe."
  }
];

const movieSci = [
  {
    movie: "Tenet",
    rating: "7.6",
    desc:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time."
  },
  {
    movie: "Inception",
    rating: "8.8",
    desc:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  }
];

const movieHorro = [
  {
    movie: "Sinister",
    rating: "6.8",
    desc:
      "Washed-up true crime writer Ellison Oswalt finds a box of super 8 home movies in his new home that suggest the murder that he is currently researching is the work of a serial killer whose work dates back to the 1960s."
  },
  {
    movie: "The Conjuring",
    rating: "7.5",
    desc:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
  }
];

export default function App() {
  const [text, settext] = useState("");
  const [rating, setrating] = useState("");
  const [desc, setdesc] = useState("");

  const [text2, settext2] = useState("");
  const [rating2, setrating2] = useState("");
  const [desc2, setdesc2] = useState("");

  function showAction() {
    //console.log(movieAction[1].movie);
    settext(movieAction[0].movie);
    setrating(movieAction[0].rating);
    setdesc(movieAction[0].desc);
    // return <h3>{movieAction[1].movie} </h3>;
    settext2(movieAction[1].movie);
    setrating2(movieAction[1].rating);
    setdesc2(movieAction[1].desc);
  }

  function showHorror() {
    settext(movieHorro[0].movie);
    setrating(movieHorro[0].rating);
    setdesc(movieHorro[0].desc);

    settext2(movieHorro[1].movie);
    setrating2(movieHorro[1].rating);
    setdesc2(movieHorro[1].desc);
  }

  function showSci() {
    settext(movieSci[0].movie);
    setrating(movieSci[0].rating);
    setdesc(movieSci[0].desc);

    settext2(movieSci[1].movie);
    setrating2(movieSci[1].rating);
    setdesc2(movieSci[1].desc);
  }

  return (
    <div className="App">
      <h2>
        MOVIES Recommendation App:{" "}
        <i>
          Favourite<strong> MOVIES </strong>
        </i>
      </h2>

      <button onClick={showAction} className="btn">
        Action
      </button>
      <button onClick={showHorror} className="btn">
        Horror
      </button>
      <button onClick={showSci} className="btn">
        Sci-Fi
      </button>

      <div className="container">
        <span>Movie: {text}</span>
        <span>IMDb: {rating}</span>
        <br />
        <span>About: {desc}</span>
      </div>

      <div className="container">
        <span>Movie: {text2}</span>
        <span>IMDb: {rating2}</span>
        <br />
        <span>About: {desc2}</span>
      </div>
    </div>
  );
}
