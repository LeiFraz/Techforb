import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CardLeft from '../../Components/Login/CardLeft';
import CardRight from '../../Components/Login/CardRight';


const Login = () => {
    const [login, setLogin] = useState(localStorage.getItem('token'))
    const navigate = useNavigate();

    const pageDashboard = () => navigate('/dashboard')

    useEffect(() => {
        const isLogin = () => {
            try {
                if (login){
                    pageDashboard()
                }
            } catch (error) {
                console.error(error)
            }
        }

        isLogin()
    },[login])
    return(
        <>
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '900px',
                background: 'linear-gradient(180deg, rgba(51, 163, 170, 0.85), rgba(16, 112, 118, 0.85))',
            }}>
                <CardLeft />
                <CardRight />
            </Box>
        </>
    )
}
export default Login
