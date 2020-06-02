import React, { useEffect, useState } from 'react';
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";
import covid19 from "./assets/covid19.png"

function App() {
  const [data, updatedData] = useState();
  let [country, setCountry] = useState();

  useEffect(() => {
    const update = async () => {
      const apidata = await fetchData(country);
      updatedData(apidata);
    }
    update();
  }, [])

  let handleCountryChange = async (changedCountry) => {
    
    setCountry(changedCountry);
    const apidata = await fetchData(changedCountry);
    updatedData(apidata);
    setCountry(changedCountry); 
  }

  return (
    <div className={styles.container}>
      <img src={covid19} alt="Covid19" className={styles.image}></img>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
}

export default App;
