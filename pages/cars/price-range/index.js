import { useRouter } from "next/router"
import { useEffect } from "react"
function index() {
    const router=useRouter();
    useEffect(()=>{
        router.push('/')
    },[])
  return (
    <div>index</div>
  )
}

export default index