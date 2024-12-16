import { useSelector } from "react-redux";

export default function Outher() {
  const data = useSelector((state) => state.search.data);

  return (
    data && (
      <>
        <div className="relative flex w-full h-12 shadow rounded-full items-center justify-between">
          <div className="absolute inset-0 bg-slate-900 opacity-30 rounded-full"></div>
          <div className="relative flex text-slate-50 px-4">
            <img src="/rain.png" alt="" />
            <span>{data.clouds.all}%</span>
          </div>
          <div className="relative flex text-slate-50 px-4">
            <img src="/public/humidity.png" alt="" />
            <span>{data.main.humidity}%</span>
          </div>
          <div className="relative flex text-slate-50 px-4">
            <img src="/public/wind.png" alt="" />
            <span>{data.wind.speed} km/h</span>
          </div>
        </div>
      </>
    )
  );
}
