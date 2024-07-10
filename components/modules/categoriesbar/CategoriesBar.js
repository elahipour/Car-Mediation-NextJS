import Sedan from "@/components/icons/Sedan"
import Suv from "@/components/icons/Suv";
import Hatchback from "@/components/icons/Hatchback";
import Sport from "@/components/icons/Sport";
import Link from "next/link";
function CategoriesBar() {
  return (
    <div className='flex justify-between w-[400px]'>
        <Link href='/cars/sedan' className='bg-[#befa00] w-[90px] px-4 py-1 rounded-md flex flex-col items-center'>
            <span className='font-bold text-[14px]'>Sedan</span>
            <Sedan/>
        </Link>
        <Link href='/cars/suv' className='bg-[#befa00] w-[90px] px-4 py-1 rounded-md flex flex-col items-center'>
            <span className='font-bold text-[14px]'>Suv</span>
            <Suv/>
        </Link>
        <Link href='/cars/hatchback' className='bg-[#befa00] w-[90px] px-4 py-1 rounded-md flex flex-col items-center'>
            <span className='font-bold text-[14px]'>Hatchback</span>
            <Hatchback/>
        </Link>
        <Link href='/cars/sport' className='bg-[#befa00] w-[90px] px-4 py-1 rounded-md flex flex-col items-center'>
            <span className='font-bold text-[14px]'>Sport</span>
            <Sport/>
        </Link>
    </div>
  )
}

export default CategoriesBar