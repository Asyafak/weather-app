import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import SearchNButton from "./components/SearchNButton";
import MainWeather from "./components/MainWeather";
import Outher from "./components/Outher";
import Error from "./components/Error";

import { searchWeatherThunk } from "./store/thunk/searchWeatherThunk";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.search.data);
  const city = useSelector((state) => state.search.city);
  const error = useSelector((state) => state.search.error);

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
        } relative m-auto flex flex-col items-center justify-between h-[35rem] w-[26rem] rounded-xl p-8`}
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
