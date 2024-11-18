import { Box, IconButton, Typography } from "@mui/material"
import iconRay from '../../assets/Login/Icon-ray.png'
import iconStar from '../../assets/Login/Icon-star.png'
import fondo from '../../assets/Login/background.png'

const CardLeft = () => {
    
    return(
        <Box sx={{
            width: '796px',
            height: '900px',
            
            background: `linear-gradient(180deg, rgba(51, 163, 170, 0.85), rgba(16, 112, 118, 0.85)), url(${fondo})`,
            backgroundSize: "cover", 
            backgroundPosition: "center",

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Box sx={{
                color: '#FFFFFF',
                width: '60%',
            }}>
                <Box sx={{
                    width: '360px',
                    textAlign: 'left',
                    mb: '16px'
                }}>
                    <Typography variant='h1' sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '48px',
                        fontWeight: '600',
                        marginBottom: '16px',
                    }}> 
                        Registrarse 
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        fontWeight: '400',
                    }}> 
                        Nos alegra que quieras unirte, estamos listos para atender tus necesidades. Registrate y aprovecha al máximo nuestra plataforma.
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    marginBottom: '16px',
                    textAlign: 'left',
                }}> 
                    <IconButton sx={{
                            width: '24px',
                            height: '24px',
                            marginRight: '15px'
                    }}>
                        <img src={iconRay} alt='Monitoreo'/>
                    </IconButton>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}> 
                            Monitoreo Integral
                            </Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '12px',
                            fontWeight: '400',
                        }}> 
                            Administra, monitorea mutiples plantas de forma centralizada
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    marginBottom: '16px',
                    textAlign: 'left',
                }}> 
                    <IconButton sx={{
                            width: '24px',
                            height: '24px',
                            marginRight: '15px'
                    }}>
                        <img src={iconStar} alt='Notificacion'/>
                    </IconButton>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}> 
                            Notificaciones en tiempo real
                            </Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '12px',
                            fontWeight: '400',
                        }}> 
                            Recibi notificaciones en tiempo real sobre las mediciones
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CardLeft