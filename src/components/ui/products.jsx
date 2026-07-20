import { ProductCard } from "./productCard";
import { FetchData } from "../../api/FetchData";
import { useEffect, useState } from "react"

export default function Products(){
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 9;

    useEffect(() => {
            async function getProducts() {
                const data = await FetchData();
                setProducts(data);
            }

            getProducts();
        },[]);


    const lastIdex = currentPage * productPerPage;
    const firstIndex = lastIdex - productPerPage;
    const currentProducts = products.slice(firstIndex, lastIdex)

    const totalPages = Math.ceil(products.length / productPerPage);

    return(
        <>
            <div className="flex-1">
                <div>
                    <div className="flex items-center gap-10">
                        <button className="border-b-2 border-[#46A358] font-semibold text-[#46A358]">
                            All Plants
                        </button>
                        <button>Sale</button>
                        <select className="border-none bg-transparent text-sm outline-none">
                            <option>Default Sorting</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {currentProducts.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
                <div className="flex gap-3 mt-10">
                    {
                        Array.from({length: totalPages}).map((_, index) =>(
                            <button key={index} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? "bg-green-600 text-white px-4 py-2" : "border px-4 py-2"}>{index + 1}</button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}