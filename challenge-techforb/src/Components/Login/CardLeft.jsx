import { Box, IconButton, Typography } from "@mui/material"
import iconRay from '../../assets/Login/Icon-ray.png'
import iconStar from '../../assets/Login/Icon-star.png'
import fondo from '../../assets/Login/background.png'

const CardLeft = () => {
    // width: 1600px;
    // height: 900px;
    // left: -744px;
    
    return(
        <Box sx={{
            width: '765px',
            height: '900px',
            background: `linear-gradient(180deg, rgba(51, 163, 170, 0.85) 0%, rgba(16, 112, 118, 0.85) 100%), url(${fondo})`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            display: 'flex',
            // flex: 1,
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            {/* <Box component='img' src={fondo} sx={{
                position: 'absolute',
                width: '660px',
                height: '900px',
                left: '0px',
                zIndex: '1'
            }}/>
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, #33A3AA 0%, #107076 100%)',
                opacity: '0.85',
                zIndex: '2'
            }}/> */}
            <Box sx={{
                color: '#FFFFFF',
                // zIndex: '3',
            }}>
                <Typography variant='h1' sx={{ marginBottom: "16px" }}> 
                    Iniciar Sesion 
                </Typography>
                <Typography sx={{ marginBottom: "24px" }}> 
                    Nos alegra tenerte de vuelta y estamos listos para atender tus necesidades. Inicia sesión y continúa aprovechando al máximo nuestra plataforma.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}> 
                    <IconButton>
                        <img src={iconRay} alt='' style={{
                            width: '24px',
                            height: '24px'
                        }}/>
                    </IconButton>
                    <Typography> 
                        Monitoreo Integral
                        </Typography>
                    <Typography> 
                        Administra, monitorea mutiples plantas de forma centralizada
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}> 
                    <IconButton>
                        <img src={iconStar} alt='' style={{
                            width: '20px',
                            height: '20px'
                        }}/>
                    </IconButton>
                    <Typography> 
                        Notificaciones en tiempo real
                        </Typography>
                    <Typography> 
                        Recibi notificaciones en tiempo real sobre las mediciones
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CardLeft