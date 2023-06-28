import { useContext, useState } from "react";
import { GameContext } from "../Main";

export default function Entry({ setBearer }) {
  const [callsignContent, setCallsignContent] = useState('');
  const { factions } = useContext(GameContext);
  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { bearer, symbol, faction } = Object.fromEntries(new FormData(form));
    if (bearer) {
      setBearer(`Bearer ${bearer}`)
      sessionStorage.setItem('Authorization', `Bearer ${bearer}`);
    } else {
      // *HYPOTHETICAL* fetch to sign up.
      const url = 'https://api.spacetraders.io/v2/register';
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ faction, symbol })
      };

      // try {
      //   const response = await fetch(url, options);
      //   const data = await response.json();
      //   // set Bearer and navigate to Home
      //   console.log(data)
      // } catch (error) {
      //   // on error, create modal box to display
      // }
    }
  };

  const handleCallsignContentChange = event => {
    const newContent = event.target.value.toUpperCase();
    setCallsignContent(newContent);
  };

  return (
    <div className="Entry">
      <h1>Welcome to StarPost!</h1>
      <form className="login" onSubmit={handleFormSubmit}>
        <h2>Please enter your SpaceTraders-issued <br />
          "Bearer Authentication Key" to start:
        </h2>
        <fieldset>
          <label htmlFor="">Bearer: </label>
          <input type="text" name="bearer" />
        </fieldset>
        <button>Enter</button>
      </form>
      {/* <form className="register" onSubmit={handleFormSubmit}>
        <h2>Or, select your callsign and select a faction to register:</h2>
        <fieldset>
          <label htmlFor="">Callsign: </label>
          <input type="text" name="symbol" value={callsignContent} onChange={handleCallsignContentChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Faction: </label>
          <select name="faction" id="">
            {factions.map((faction, idx) => (
              <option key={idx} value={faction.symbol}>{faction.name}</option>
            ))}
          </select>
        </fieldset>
        <button>Register Agent</button>
      </form> */}
    </div>
  );
};