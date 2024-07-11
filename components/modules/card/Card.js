import Location from "../../icons/Location";
function Card(props) {
  const { id, model, year, distance, location, price, image } = props;
  return (
   <div className={"p-2 min-h-[300px] shadow-slate-400 rounded-sm shadow-sm"}>
      <div className={"w-60 flex flex-col gap-4"}>
        <figure className="w-full">
          <img src={image} className="rounded" />
        </figure>
       <div className="flex flex-col gap-1">
        <h4 className={"font-bold"}>{model}</h4>
        <p className={"text-[12px] w-fit text-slate-400 font-bold"}>
          <span>{year}</span>
          <span> . {distance}</span>
        </p>
        </div>
        <p className="flex justify-between gap-2">
          <span
            className={
              "bg-[#00FF40] px-[4px] py-[1px] rounded font-bold text-sm w-fit"
            }
          >
            $ {price}
          </span>
          <i className="not-italic flex gap-1">
            <span>{location}</span>
            <Location />
          </i>
        </p>
      </div>
    </div>
  );
}

export default Card;
