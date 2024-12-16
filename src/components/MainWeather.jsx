import { useSelector } from "react-redux";

export default function MainWeather() {
  const data = useSelector((state) => state.search.data);

  return (
    <div className="flex flex-col items-center text-slate-50 gap-4 text-center">
      {data && (
        <>
          <img
            src={`/public/${data.weather[0].icon}.png`}
            width="150"
            height="150"
            alt="weather"
          />
          <span className="font-bold text-6xl">{data.main.temp} &deg; C</span>
          <h1 className="font-semibold text-4xl">{data.name}</h1>
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-xl">Precifitation</h2>
            <div className="flex gap-2 w-48">
              <p className="font-light w-full">Min: {data.main.temp_min}</p>
              <p className="font-light w-full">Max: {data.main.temp_max}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
