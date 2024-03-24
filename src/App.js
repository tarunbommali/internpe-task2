import React from 'react' 
import ReactDOM  from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home  from './components/Home'
import Header  from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductItemDetails from './components/ProductItemDetails'

const AppLayout = () => (
    <div>
        <Header />
        <div className='min-h-screen flex flex-col items-center py-3'>
        <Outlet />
        </div>
        <Footer />
    </div>
)

const appRouter  = createBrowserRouter([
    {
        path : "/", 
        element: <AppLayout />,
        children : [
            {
                path : "/" , 
                element : <Home/>
            }, 
            {
                path : "/cart" , 
                element : <Cart/>
            },
            {
                path : "product/:id", 
                element : <ProductItemDetails />
            }
        ]
    }
])








const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)





