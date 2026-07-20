import image from '../../assets/Vector.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

export function Header(){
    return (
        <>
        <nav className="flex items-center justify-between px-20 h-20">
            <div className="flex items-center gap-2 text-2xl font-bold text-green-600">
            <img src={image} alt="" />
                GREENSHOP
            </div>

            <ul className="flex h-full items-center gap-10">
    <li>
        <NavLink
            to="/"
            className={({isActive}) =>
                isActive
                ? "text-green-600 border-b-[2px] border-green-600"
                : "hover:text-green-600"
            }
        >
            Home
        </NavLink>
    </li>

    <li>
        <NavLink
            to="/shop"
            className={({isActive}) =>
                isActive
                ? "text-green-600 border-b-[2px] border-green-600"
                : "hover:text-green-600"
            }
        >
            Shop
        </NavLink>
    </li>

    <li>
        <NavLink
            to="/plant-care"
            className={({isActive}) =>
                isActive
                ? "text-green-600 border-b-[2px] border-green-600"
                : "hover:text-green-600"
            }
        >
            Plant Care
        </NavLink>
    </li>

    <li>
        <NavLink
            to="/blogs"
            className={({isActive}) =>
                isActive
                ? "text-green-600 border-b-[2px] border-green-600"
                : "hover:text-green-600"
            }
        >
            Blogs
        </NavLink>
    </li>
</ul>
            <div className="flex items-center gap-5">
                <SearchIcon className='text-gray-600 w-7 h-7 cursor-pointer hover:text-green-600'/>
                <ShoppingCartIcon className='text-gray-600 w-7 h-7 cursor-pointer hover:text-green-600'/>
                <button className='bg-green-600 text-white px-5 py-2 rounded-lg'>Login</button>
            </div>
        </nav>
        </>
    )
}