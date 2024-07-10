import CategoriesBar from "../modules/categoriesbar/CategoriesBar";
import Searchbar from "../modules/searchbar/Searchbar";
import carsData from "../../data/carsData";
import Cars from "./Cars";

function Homepage() {
  return (
    <div className="flex flex-col gap-14 justify-center items-center">
      <Searchbar />
      <CategoriesBar />
      <Cars data={carsData} />
    </div>
  );
}

export default Homepage;
