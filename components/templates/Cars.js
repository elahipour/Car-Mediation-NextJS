import Card from "../modules/card/Card"

function Cars({data}) {
  return (
    <div className={"w-full grid place-items-center"}>
    <div className={'grid place-items-center grid-cols-4 gap-4 w-fit'}>
        {
            data.map(car=>{
                return <Card key={car.id} {...car}/>
            })
        }
    </div>
    </div>
  )
}

export default Cars