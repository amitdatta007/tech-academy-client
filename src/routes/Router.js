import {createBrowserRouter} from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <h2>this is home</h2>
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
                element: <p>Faq page</p>
            },
        ] 
    }
]);

export default Router;