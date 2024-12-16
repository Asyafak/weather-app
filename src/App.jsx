import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import SearchNButton from "./components/SearchNButton";
import MainWeather from "./components/MainWeather";
import Outher from "./components/Outher";
import Error from "./components/Error";

import { searchWeatherThunk } from "./store/thunk/searchWeatherThunk";
import { setError } from "./store/slices/searchWeatherSlices";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.search.data);
  const city = useSelector((state) => state.search.city);
  const error = useSelector((state) => state.search.error);

  const searchUserLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=0bda9ac72e0628"
      );

      if (!response.ok) {
        throw new Error(
          "): Mungkin API key ku sudah limit, saya set default Bandung T_T"
        );
      }

      const data = await response.json();
      localStorage.setItem("userLocation", data.city);
    } catch (error) {
      dispatch(setError(error));
    }
  };

  useEffect(() => {
    const userLocation = localStorage.getItem("userLocation");
    if (!userLocation) {
      searchUserLocation();
      return;
    }
    dispatch(searchWeatherThunk(userLocation));
  }, []);

  useEffect(() => {
    dispatch(searchWeatherThunk(city));
  }, [city]);

  return (
    <div className="container flex h-screen">
      <div
        className={`${
          data && data.weather && data.weather[0].icon.slice(-1) === "d"
            ? "bg-light"
            : "bg-night"
        } relative m-auto flex flex-col items-center justify-between h-full sm:h-[35rem] w-[26rem] sm:rounded-xl p-8`}
      >
        {error && <Error />}
        <SearchNButton />
        <MainWeather />
        <Outher />
      </div>
    </div>
  );
}

export default App;
