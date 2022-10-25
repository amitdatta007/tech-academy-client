import {createBrowserRouter} from 'react-router-dom';
import Main from '../layout/Main';
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
                path: '/courses',
                element: 'this is courses'
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
        ] 
    }
]);

export default Router;