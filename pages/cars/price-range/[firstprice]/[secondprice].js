import { useRouter } from "next/router";
import { useState } from "react";
import emptyAnim from "@/components/animation/empty.json";
import carsData from "@/data/carsData";
import Cars from "@/components/templates/Cars";
import GoBackBtn from "@/components/modules/btns/GoBackBtn";
import Lottie from "lottie-react";

function SecondPrice() {
  const router = useRouter();
  const [carsInRange, UpdateCarsInRange] = useState([
    ...carsData.filter((cars) => {
      return (
        cars.price >= router.query.firstprice &&
        cars.price <= router.query.secondprice
      );
    }),
  ]);

  return (
    <div className="flex justify-center">
      <div className="min-w-[400px] mt-4 flex flex-col gap-4">
        <GoBackBtn />
        {carsInRange.length ? (
          <Cars data={carsInRange} />
        ) : (
          <Lottie
            animationData={emptyAnim}
            className="flex justify-center items-center"
            loop={false}
          />
        )}
      </div>
    </div>
  );
}

export default SecondPrice;
