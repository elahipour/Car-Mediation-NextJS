import Link from "next/link"

function layout({children}) {
  return (
    <div>
        <header className='flex justify-center '>
            <Link href='/' className='p-4 grid place-items-center bg-[#befa00] w-[400px] mt-2 rounded-md'>
                <h1 className='font-bold text-[42px] border-b-2 border-b-zinc-500'>BOTOCAR</h1>
                <p className='font-bold'>Choose and buy your car</p>
            </Link>
        </header>
        <div className="min-h-[100vh]">{children}</div>
        <footer className='bg-gray-300 flex justify-center gap-1'>
            <Link href='https://botostart.ir' className='font-bold'>Botostart</Link>
            <p>Next.js courses | Botocar Project &copy;</p>
        </footer>
    </div>
  )
}

export default layout