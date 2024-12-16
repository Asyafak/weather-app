import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";

import { setCity } from "../store/slices/searchWeatherSlices";

export default function SearchNButton() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setCity(input.trim()));
        setInput(() => "");
      }}
      className="flex w-full gap-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
        className="outline-none w-full rounded-full p-2 shadow focus:shadow-lg transition"
      />
      <button
        type="submit"
        className="bg-white rounded-full h-10 w-10 flex justify-center items-center shadow hover:scale-105"
      >
        <CiSearch />
      </button>
    </form>
  );
}
