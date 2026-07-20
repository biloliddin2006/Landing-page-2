import plant1 from '../../assets/image1.png'
import plant2 from '../../assets/image2.png'
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";

export function Section(){
    return(
        <>
            <section className='w-[1220px] mx-auto my-25 grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-between bg-[#fbfbfb] px-8 py-6 overflow-hidden'>
                    <div className='absolute -bottom-14 -left-14 w-32 h-32 rounded-full border-2 border-green-500'></div>
                    <div className='w-1/2 flex justify-center z-10'>
                        <img src={plant1} alt="" className='w-52 object-contain'/>
                    </div>
                    <div className='w-1/2 text-right z-10'>
                        <h2 className='text-2x1 font-bold text-[#3d3d3d] leading-tight'>
                            SUMMER CACTUS & SUCCULENTS
                        </h2>
                        <p className='text-sm text-[#727272] mt-3 mb-5'>
                            We are an online plant shop offering a wide range of cheap and
                            trendy plants.
                        </p>
                        <button className='bg-[#46a358] hover:bg-green-700 text-white px-5 py-2 rounded-md transition'>
                            Find More →
                        </button>
                    </div>
                </div>

                <div className='relative flex items-center justify-between bg-[#fbfbfb] px-8 py-6 overflow-hidden'>
                    <div className='absolute -bottom-14 -left-14 w-32 h-32 rounded-full border-2 border-green-500'></div>
                    <div className='w-1/2 flex justify-center z-10'>
                        <img src={plant2} alt="" className='w-52 object-contain'/>
                    </div>
                    <div className="w-1/2 text-right z-10">
                        <h2 className="text-2xl font-bold text-[#3D3D3D] leading-tight">
                            STYLING TRENDS <br /> & MUCH MORE
                        </h2>
                        <p className='text-sm text-[#727272] mt-3 mb-5'>
                            We are an online plant shop offering a wide range of cheap and
                            trendy plants.
                        </p>
                        <button className="bg-[#46A358] hover:bg-green-700 text-white px-5 py-2 rounded-md transition">
                            Find More →
                        </button>
                    </div>
                </div>
            </section>

            <section className='w-[1220px] mx-auto my-40 px-4'>
                <div className='text-center mb-10'>
                    <h2 className='text-[30px] font-bold text-[#3d3d3d]'>Our Blog Posts</h2>
                    <p className='text-sm text-[#727272] mt-2'>
                        We are an online plant shop offering a wide range of cheap and trendy
                        plants.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
                    <div className='bg-[#fbfbfb]'>
                        <img src={blog1} alt="" className='w-full h-56 object-cover'/>
                        <div className='p-4'>
                            <p className='text-xs text-[#46A358] font-medium'>
                                September 12 | Read in 6 minutes
                            </p>
                            <h3 className='text-xl font-bold text-[#3d3d3d] mt-2'>
                                Cactus & Succulent Care Tips
                            </h3>
                            <p className='text-sm text-[#727272] mt-2'>
                                Cacti are succulents are easy care plants for any home or patio.
                            </p>
                            <button className='mt-4 text-sm font-medium hover:text-[#46A358] transition'>Read more →</button>
                        </div>
                    </div>


                    <div className='bg-[#fbfbfb]'>
                        <img src={blog2} alt="" className='w-full h-56 object-cover'/>
                        <div className='p-4'>
                            <p className='text-xs text-[#46A358] font-medium'>
                                September 12 | Read in 6 minutes
                            </p>
                            <h3 className='text-xl font-bold text-[#3d3d3d] mt-2'>
                                Cactus & Succulent Care Tips
                            </h3>
                            <p className='text-sm text-[#727272] mt-2'>
                                Cacti are succulents are easy care plants for any home or patio.
                            </p>
                            <button className='mt-4 text-sm font-medium hover:text-[#46A358] transition'>Read more →</button>
                        </div>
                    </div>

                    <div className='bg-[#fbfbfb]'>
                        <img src={blog3} alt="" className='w-full h-56 object-cover'/>
                        <div className='p-4'>
                            <p className='text-xs text-[#46A358] font-medium'>
                                September 12 | Read in 6 minutes
                            </p>
                            <h3 className='text-xl font-bold text-[#3d3d3d] mt-2'>
                                Cactus & Succulent Care Tips
                            </h3>
                            <p className='text-sm text-[#727272] mt-2'>
                                Cacti are succulents are easy care plants for any home or patio.
                            </p>
                            <button className='mt-4 text-sm font-medium hover:text-[#46A358] transition'>Read more →</button>
                        </div>
                    </div>

                    <div className='bg-[#fbfbfb]'>
                        <img src={blog4} alt="" className='w-full h-56 object-cover'/>
                        <div className='p-4'>
                            <p className='text-xs text-[#46A358] font-medium'>
                                September 12 | Read in 6 minutes
                            </p>
                            <h3 className='text-xl font-bold text-[#3d3d3d] mt-2'>
                                Cactus & Succulent Care Tips
                            </h3>
                            <p className='text-sm text-[#727272] mt-2'>
                                Cacti are succulents are easy care plants for any home or patio.
                            </p>
                            <button className='mt-4 text-sm font-medium hover:text-[#46A358] transition'>Read more →</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}