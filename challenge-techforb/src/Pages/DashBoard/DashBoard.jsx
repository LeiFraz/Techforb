import CardConditions from "../../Components/DashBoard/CardConditions"
import CardPlants from "../../Components/DashBoard/CardPlants"
import CardStatus from "../../Components/DashBoard/CardStatus"
import LeftMenu from "../../Components/DashBoard/LeftMenu"
import NavBar from "../../Components/DashBoard/NavBar"

import { Box } from '@mui/material'

const DashBoard = () => {

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

                    <Box>
                        <CardConditions/>
                    </Box>
                </Box>

            </Box>
        </>
    )
}
export default DashBoard