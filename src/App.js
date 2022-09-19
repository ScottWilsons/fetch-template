import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const response = await fetch(`https://api.fbi.gov/wanted/v1/list`);
      const data = await response.json();
      setApiData(data);
    }
    FetchData();
  }, []);
  console.log(apiData);
  return <div className="App"></div>;
}

export default App;
