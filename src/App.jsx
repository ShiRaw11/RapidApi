import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [language, setLanguage] = useState([]);
  const [population, setPopulation] = useState("");
  const [image, setImage] = useState("");
  const options = {
    method: "GET",
    url: "https://rest-country-api.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "3d9064465bmsh1c990d7c3a08580p14756cjsn9a475faf35a4",
      "X-RapidAPI-Host": "rest-country-api.p.rapidapi.com",
    },
  };
  const handleQuote = async (e) => {
    e.preventDefault();
    try {
      await axios.request(options).then((response) => {
        const l = response.data[count];
        let c = l.languages;
        let d = Object.values(c);
        console.log(d);
        setCount(count + 1);
        setName(l.name.common);
        setCapital(l.capital[0]);
        setLanguage([...d]);
        setPopulation(l.population);
        setImage(l.flag);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const arrayDataItems = language.map((course) => <li>{course}</li>);
  return (
    <>
      <h1> Information about countries around the world</h1>
      <div>
        <div className="name">
          <h2>Name of Country :</h2>

          <h3>{name}</h3>

          <h>{image}</h>
        </div>
        <div className="name">
          <h2>Capital City:</h2>
          <h3>{capital}</h3>
        </div>

        <div className="name">
          <ul>
            <h2> Native Languages :</h2>
            <h3> {arrayDataItems} </h3>
          </ul>
        </div>
        <div className="name">
          <h2>Size of population:</h2>
          <h3>{population}</h3>
        </div>
      </div>

      <button onClick={handleQuote}> Get Country</button>
    </>
  );
}

export default App;
