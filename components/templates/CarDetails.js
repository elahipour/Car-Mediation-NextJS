import Location from "@/components/icons/Location";
import Money from "@/components/icons/Money";
import DetailsItem from "../modules/details/DetailsItem";
import Company from "@/components/icons/Company";
import Model from "@/components/icons/Model";
import Calendar from "@/components/icons/Calendar";
import Road from "@/components/icons/Road";
function CarDetails({ car }) {
  return (
    <div className="max-w-[800px] m-auto flex flex-col gap-4">
      <figure className="mt-4 animate-ping_rev">
        <img
          className="object-contain w-full"
          src={car?.image}
          alt={car?.model}
        />
      </figure>
      <h1 className="font-bold text-[24px]">{`${car?.name} ${car?.model}`}</h1>
      <div className="shadow-detailbox shadow-gray-300 flex flex-col gap-3 p-4 rounded-md animate-ping_rev">
        <DetailsItem
          detailsParam={car?.name || ""}
          title="Company"
          Component={Company}
        />
        <DetailsItem
          detailsParam={car?.model || ""}
          title="Model"
          Component={Model}
        />
        <DetailsItem
          detailsParam={car?.year || ""}
          title="First Registration"
          Component={Calendar}
        />
        <DetailsItem
          detailsParam={car?.distance || ""}
          title="KMS Driven"
          Component={Road}
        />
      </div>
      <div className="shadow-detailbox shadow-gray-300 p-4 rounded-md  animate-ping_rev">
        <DetailsItem
          detailsParam={car?.location || ""}
          title="Location"
          Component={Location}
        />
      </div>
      <div className="flex flex-col gap-2  animate-ping_rev">
        <h2 className="text-[20px] font-bold">Extra Information</h2>
        <p className="text-justify font-medium">{car?.description}</p>
      </div>
      <div className="shadow-detailbox shadow-gray-300 p-4 rounded-md">
        <DetailsItem
          detailsParam={car?.price || ""}
          title="Price"
          Component={Money}
        />
      </div>
      <button className="bg-[#befa00] w-full rounded-md font-bold py-2">
        Buy
      </button>
    </div>
  );
}

export default CarDetails;
