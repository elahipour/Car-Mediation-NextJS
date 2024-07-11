import { useRouter } from "next/router"
import carsData from "@/data/carsData";
import { useEffect, useState } from "react";
import Cars from "@/components/templates/Cars";
import Searchbar from "@/components/modules/searchbar/Searchbar";
import CategoriesBar from "@/components/modules/categoriesbar/CategoriesBar";
function Category() {
    const router=useRouter();
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        setCategory(carsData.filter(car=>car.category===router.query.category))
    },[router.query])
  return (
    <div className="flex flex-col gap-14 justify-center items-center">
         <Searchbar />
      <CategoriesBar />
        <Cars data={category}/>
    </div>
  )
}

export default Category