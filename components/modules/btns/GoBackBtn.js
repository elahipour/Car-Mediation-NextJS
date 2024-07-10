import Back from "@/components/icons/Back";
import { useRouter } from "next/router"

function GoBackBtn() {
const router=useRouter();
    return (
    
    <button className='bg-[#befa00] w-fit px-4 py-1 rounded-md flex flex-row-reverse gap-2 items-center' onClick={()=>router.replace('/')}>
        <span className='font-bold'>back</span>
        <Back/>
    </button>
   
  )
}

export default GoBackBtn