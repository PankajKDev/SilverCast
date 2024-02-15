import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Children,
} from "react";

import Navbar from "./assets/Components/Navbar";
import Hero from "./assets/Components/Hero";
import mlady from "./assets/Components/Images/mlady.png";
import blady from "./assets/Components/Images/mh.png";
import ExtraDataCards from "./assets/Components/ExtraDataCards";
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("delhi,india");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiKey = import.meta.env.VITE_REACT_APP_KEY;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=yes`
      );
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const darkModeClass = darkMode ? "neoColor" : "xeoColor";

  return (
    <AppContext.Provider
      value={{
        data,
        darkMode,
        setDarkMode,
        darkModeClass,
        loading,
        error,
        search,
        setSearch,
        fetchData,
      }}
    >
      <Navbar />
      {error ? (
        <>
          <div
            style={{
              height: "100dvh",
              display: "flex",
              overflow: "hidden",
              justifyContent: "center",
              backgroundColor: darkMode ? "white" : "black",
              zIndex: "-1",
            }}
          >
            <div>
              <img
                style={{
                  height: "67%",
                  width: "fit-content",
                  marginTop: "27%",
                }}
                src={darkMode ? mlady : blady}
                alt="error"
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    color: darkMode ? "black" : "white",
                  }}
                >
                  ERROR LOADING APP
                </h1>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Hero />
          <ExtraDataCards />
        </>
      )}
    </AppContext.Provider>
  );
};
