import { Outlet } from "react-router-dom"
import { Header } from "../header/header.jsx"
import { Footer } from "../footer/footer.jsx"
export function Layout(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}