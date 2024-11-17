import { useRoutes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import DashBoard from '../Pages/DashBoard/DashBoard'


export const Routes = () => {

    const routes = [
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/registro',
            element: <Register/>
        },
        {
            path: '/dashboard',
            element: <DashBoard/>
        },
    ]
    return useRoutes(routes)
}