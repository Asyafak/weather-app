import { useDispatch, useSelector } from "react-redux";

import { removeError } from "../store/slices/searchWeatherSlices";

export default function Error() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.search.error);
  const data = useSelector((state) => state.search.data);

  return (
    <div className="absolute h-full w-full flex">
      <div className="bg-white flex flex-col justify-between items-end m-auto p-4 w-80 h-40 rounded-xl text-slate-900 shadow-xl backdrop-blur-md">
        <h1>{error}</h1>
        <button
          type="button"
          onClick={() => dispatch(removeError())}
          className={`${
            data && data.weather && data.weather[0].icon.slice(-1) === "d"
              ? "bg-light hover:opacity-60"
              : "bg-night hover:opacity-60"
          } py-2 px-4 rounded text-slate-50 transition ease-in-out`}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
