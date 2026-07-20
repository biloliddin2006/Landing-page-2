import plant from '../../assets/plant.png'

export function Body(){
    return(
        <>
            <section className='relative mx-auto my-15 flex h-[450px] w-[1211px] items-center justify-between overflow-hidden bg-[#f5f5f5] px-14'>
                <div className='max-w-[560px]'>
                    <p className='text-xs font-medium uppercase tracking-[2px] text-[#3d3d3d]'>WELCOME TO GREENSHOP</p>
                    <h1 className='mt-3 text-[68px] font-extrabold uppercase leading-[70px] text-[#3D3D3D]'>
                        LET'S MAKE A <br /> BETTER 
                        <span className='text-[#46A358]'> PLANET</span>
                    </h1>
                    <p className='mt-5 max-w-[520px] text-[14px] leading-7 text-[#727272]'>
                        We are an online plant shop offering a wide range of cheap 
                        and trendy plants. Use our plants to create an amazing space.
                    </p>

                    <button className='mt-8 rounded-md bg-[#46a358] px-7 py-3 text-sm font-bold uppercase text-white hover:bg-green-700 transition'>
                        SHOP NOW
                    </button>

                </div>
                <div className='relative h-full w-[520px]'>
                    <img src={plant} alt="" className='absolute bottom-0 right-0 w-[420px] z-10'/>
                    <img src={plant} alt="" className='absolute bottom-5 left-30 w-[120px] z-20'/>
                </div>

                <div className='absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2'>
                    <span className='h-2 w-2 rounded-full bg-[#727272]'></span>
                    <span className='h-2 w-2 rounded-full bg-[#46A358]'></span>
                    <span className='h-2 w-2 rounded-full bg-[#727272]'></span>
                </div>
            </section>
            
        </>
    )
}