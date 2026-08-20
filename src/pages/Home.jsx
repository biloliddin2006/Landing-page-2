import { Body } from "../components/ui/body"
import Products from "../components/ui/products"
import { Section } from "../components/ui/section"
import { Sidebar } from "../components/sidebar/sidebar"

export function Home(){
    return(
        <>
            <Body />
            <section className="mx-auto my-40 flex max-w-7xl gap-8">
                <Sidebar/>
                <Products />
            </section>
            <Section />
        </>
    )
}

//export default Home;
