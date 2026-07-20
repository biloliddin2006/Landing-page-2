import sale from '../../assets/Super Sale Banner.png'

export function Sidebar(){
    const categories = [
        ["Houston Plants", 33],
        ["Potter Plants", 12],
        ["Seeds", 65],
        ["Small Plants",39],
        ["Big Plants", 23],
        ["Succulents", 17],
        ["Terrariums", 19],
        ["Gardening", 13],
        ["Accessories", 18],
    ]
    return(
        <>
            <aside className="w-64 bg-[#FBFBFB] p-5 ml-17">
                <h2 className="mb-5 text-lg font-bold">Categories</h2>

                <ul className="space-y-4">{categories.map(([name, count]) => (
                    <li key={name} className="flex cursor-pointer justify-between text-sm hover:text-green-600">
                        <span>{name}</span>
                        <span>({count})</span>
                    </li>
                ))}
                </ul>
                <div className="mt-10">
                    <h2 className="font-bold">Price Range</h2>
                    <input type="range" className="mt-5 w-full accent-green-600"/>
                    <p className="mt-3 text-sm">Price: <span className="font-semibold text-green">{" "}$39 - $1230</span></p>
                    <button className="mt-5 rounded bg-green-600 px-6 py-2 text-white">Filter</button>
                </div>

                <div className="mt-10">
                    <h2 className="font-bold">Size</h2>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li className="flex justify-between">
                            <span>Small</span>
                            <span>(119)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Medium</span>
                            <span>(86)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Large</span>
                            <span>(78)</span>
                        </li>
                    </ul>
                </div>
            <div className='w-76 ml-[-42px] mt-8'>
                <img src={sale} alt=""/>
            </div>    
            </aside>
            
        </>
    )
}