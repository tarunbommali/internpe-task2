import React, { lazy , Suspense} from 'react' 
import ReactDOM  from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home  from './components/Home'
import Header  from './components/Header'
import Footer from './components/Footer'

import ProductItemDetails from './components/ProductItemDetails'
import About from './components/About'
import { CartProvider } from './context/cartContext'

const Cart = lazy(() => import('./components/Cart')) 

const AppLayout = () => (
    <>
        <Header />
        <div className='min-h-screen flex flex-col items-center py-3'>
        <Outlet />
        </div>
        <Footer />
    </>
)

const appRouter  = createBrowserRouter([
    {
        path : "/", 
        element: <CartProvider><AppLayout /></CartProvider>,
        children : [
            {
                path : "/" , 
                element : <Home/>
            }, 
            {
                path : "/cart" , 
                element :<Suspense fallback={"...Loading"}> <Cart/></Suspense>
            },
            {
                path : "/product/:id", 
                element : <ProductItemDetails />
            }, {
                path : "/about" , 
                element: <About/>
            }
        ]
    }
])








const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)





