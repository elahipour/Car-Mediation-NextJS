import Link from "next/link"
import Card from "../modules/card/Card"

function Cars({data}) {
  return (
    <div className={"w-[800px] flex justify-center"}>
    <div className={'flex flex-wrap justify-between gap-4 w-fit'}>
        {
            data.map(car=>{
                return <Link key={car.id} href={`/cars/${car.category}/${car.id}`}><Card {...car}/></Link>
            })
        }
    </div>
    </div>
  )
}

export default Cars