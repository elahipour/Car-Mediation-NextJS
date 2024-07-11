import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarDetails from "@/components/templates/CarDetails";

function cardetails() {
  const router = useRouter();
const carID=router.query.carID;
const currentCar=carsData[carID-1];
  return (
    <>
    <CarDetails car={currentCar}/>
    </>
  );
}

export default cardetails;
