import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout/layout"
import { Home } from "./pages/home"
import { ProductPage } from "./pages/ProductPage"
import { Checkout } from "./pages/CheckoutPage"


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop/",
          element: <ProductPage />
        },
        
        {
          path: "shop/:id",
          element: <ProductPage />,
        },
        {
          path: "checkout",
          element: <Checkout />
        }
      ]
    }
  ])


