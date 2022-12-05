import { createBrowserRouter } from "react-router-dom";
import Maine from "../Layout/Maine";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Register from "../Pages/Register/Register";
import ShowCourseDetails from "../Pages/ShowCourseDetails/ShowCourseDetails";
import Login from './../Pages/Login/Login';
import Checkout from './../Pages/Checkout/Checkout';
import PrivateRoutes from "./PrivateRoutes";
import NotFoundPage from "../Pages/NotFoundPages/NotFoundPages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Maine></Maine>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: async() =>fetch(`https://easy-learner-sarver.vercel.app/course`)
            },
            {
                path: '/category/:id',
                element: <Courses></Courses>,
                loader: async({params}) =>fetch(`https://easy-learner-sarver.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <ShowCourseDetails></ShowCourseDetails> ,
                loader: async ({ params }) => {
                    return await fetch(`https://easy-learner-sarver.vercel.app/course/${params.id}`);
                  }
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes> ,
                loader: async ({ params }) => {
                    return await fetch(`https://easy-learner-sarver.vercel.app/course/${params.id}`);
                  }
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])