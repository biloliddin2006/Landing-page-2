import {Heart, Search, ShoppingCart} from "lucide-react"
import { useNavigate } from "react-router-dom"


export function ProductCard({product}){
    const navigate = useNavigate();

    return(
        <>
            <div className="group">
                <div className="relative flex h-72 items-center justify-center w-[245px] group-hover:border-t-2 text-[#46A358] bg-[#fbfbfb]">

                    <img src={product.image} alt="" className="w-48 h-48 object-contain" onClick={() => navigate(`/shop/${product.id}`)}/>

                    <div className="absolute bottom-4 hidden gap-3 group-hover:flex">
                        <button className="rounded-full bg-white p-2 shadow">
                            <ShoppingCart size={18} onClick={() => navigate(`/shop/${product.id}`)}/>
                        </button>

                        <button className="rounded-full bg-white p-2 shadow">
                            <Heart size={18} />
                        </button>

                        <button className="rounded-full bg-white p-2 shadow">
                            <Search size={18}/>
                        </button>
                    </div>
                </div>
                <h3 className="mt-3">{product.name}</h3>
                <p className="font-semibold text-green-600">${product.price}</p>
            </div>
            
        </>
    )
}