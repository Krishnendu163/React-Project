import { createBrowserRouter } from "react-router-dom";

const Routes = () =>{
    const router = createBrowserRouter([
       {
            path: "/about",
            element: <About/>
        },
       
    ])

    return router;
};

export default Routes;
