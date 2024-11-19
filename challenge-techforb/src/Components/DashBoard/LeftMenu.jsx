import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import PublicIcon from '@mui/icons-material/Public'
import LogoutIcon from '@mui/icons-material/Logout'
import SensorsIcon from '@mui/icons-material/Sensors'
import Monitoreo from '../../assets/DashBoard/Monitoreo_por_planta.png'
import Historico from '../../assets/DashBoard/Historico_de_plantas.png'
import Logo from '../../assets/DashBoard/Logo.png'


const LeftMenu = () => {

    return (
        <>
            <Box sx={{
                backgroundColor: '#FFFFFF',
                width: '80px',
                maxWidth: '80px',
                pt: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px'
            }}>
                <Box component='img' src={Logo} sx={{
                    width: '36px',
                    height: '32.61px'
                }}/>

                <List sx={{
                    width: '24px',
                    height: '257.97px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                }}>
                    <PublicIcon sx={{ 
                        width: '20px',
                        height: '20px',
                        color: '#C1C1C1', 
                        ":hover": {
                            color: '#000000'
                        }
                    }}/>
                    <Box component='img' src={Monitoreo} sx={{
                        width: '20px',
                        height: '20px',
                    }}/>
                    <SensorsIcon sx={{ 
                        width: '20px',
                        height: '20px',
                        color: '#C1C1C1', 
                        ":hover": {
                            color: '#000000'
                        }
                    }}/>
                    <Box component='img' src={Historico} sx={{
                        width: '20px',
                        height: '20px',
                    }}/>
                    <LogoutIcon sx={{ 
                        width: '20px',
                        height: '20px',
                        color: '#C1C1C1', 
                        ":hover": {
                            color: '#000000'
                        }
                    }}/>
                </List>
            </Box>
        </>
    )
}

export default LeftMenu;