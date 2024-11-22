import CardConditions from "../../Components/DashBoard/CardConditions"
import CardPlants from "../../Components/DashBoard/CardPlants"
import CardStatus from "../../Components/DashBoard/CardStatus"
import LeftMenu from "../../Components/DashBoard/LeftMenu"
import NavBar from "../../Components/DashBoard/NavBar"

import { Box } from '@mui/material'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const navigate = useNavigate();

    const pageRegister = () => navigate('/')

    useEffect(() => {
        const isLogout = () => {
            try {
                const tokenLocal = localStorage.getItem('token')
                if (!tokenLocal){
                    setToken(null)
                    pageRegister()
                }
            } catch (error) {
                console.error(error)
            }
        }

        setInterval(isLogout, 500)
        
    },[])

    return(
        <>
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '900px',
                backgroundColor: '#E9F1F4',
                // boxSizing: 'border-box',
            }}>
                <LeftMenu />
                <Box sx={{
                    margin: '20px 30px 20px 20px'
                }}>
                    <NavBar/>
                    <CardStatus/>
                    <CardPlants/>
                    <CardConditions/>
                </Box>

            </Box>
        </>
    )
}
export default DashBoard