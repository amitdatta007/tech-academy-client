import {createBrowserRouter} from 'react-router-dom';
import Main from '../layout/Main';
import Courses from '../pages/Courses/Courses/Courses';
import ShowCourses from '../pages/Courses/ShowCourses/ShowCourses';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/faq',
                element: <p>Faq page</p>
            },
            {
                path: '/blogs',
                element: <p>blogs page</p>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/catagory/:catagoryId',
                element: <Courses />,
                children: [
                    {
                        path: '/catagory/:catagoryId',
                        element: <ShowCourses />,
                        loader: async({params}) => fetch(`https://tech-academy-server.vercel.app/catagory/${params.catagoryId}`),
                    }
                ]
            }
        ] 
    }
]);

export default Router;