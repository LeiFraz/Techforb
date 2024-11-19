import { Badge, Box, Typography } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import { useState } from "react";


const NavBar = () => {
    
    const [invisible, setInvisible] = useState(false);
    
    const handleInvisible = () => {
        setInvisible(!invisible);
    }

    return (
        <>
            <Box sx={{ 
                 //calcular bien las medidas
                width: {xs: '320px', sm: '500px' , md: '600px', lg: 'calc(1440px - 80px)'},
                maxWidth: '1230px', //para mi pantalla
                height: '45px',
                top: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxSizing: 'border-box',
                mb: '30px',
                p: '50px 0px 20px 0px',
                color: '#000000',
            }}>
                <Typography variant="h1" sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '30px',
                    fontWeight: '500', 
                    textAlign: 'left',
                }}>
                    Monitoreo Global
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <LanguageOutlinedIcon sx={{
                        width: '20px',
                        height: '20px',
                        color: '#9595A6'
                    }}/>
                    <SettingsOutlinedIcon sx={{
                        width: '20px',
                        height: '20px',
                        color: '#9595A6'
                    }}/>
                    <Badge variant="dot" invisible={invisible} onChange={handleInvisible} color="primary">
                        <NotificationsNoneIcon sx={{ 
                            width: '20px',
                            height: '20px',
                            color: '#9595A6'}}/>
                    </Badge>
                    <Typography variant="p" sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '18px',
                        fontWeight: '600', 
                    }}>
                        Juan Rojas
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default NavBar;