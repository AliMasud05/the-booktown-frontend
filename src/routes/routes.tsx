import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Book } from "../pages/Book";
import BookCart from "../components/BookCart";
import BookDetails from "@/pages/BookDetails";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            
            {
              path:'/cart',
              element:<Book/>
            },
            {
              path:'/details',
              element:<BookDetails/>
            },
        ]
    }
])

export default routes;