import { Box, Grid2, Typography } from "@mui/material";
import ok from '../../assets/DashBoard/ok.png'
import alert from '../../assets/DashBoard/alert.png'
import warning from '../../assets/DashBoard/warning.png'
import cross from '../../assets/DashBoard/cross.png'
import { useEffect, useState } from "react";
import servicesAxios from '../../services/axios.js'

const CardStatus = () => {
    const [lecturas, setLecturas] = useState('');
    const [alertasMedias, setAlertasMedias] = useState('');
    const [alertasRojas, setAlertasRojas] = useState('');
    const [sensoresDeshabilitados, setSensoresDeshabilitados] = useState('');

    useEffect(()=>{
        const status = async() =>{
            try {
                const response = await servicesAxios.status()
                
                setLecturas(response[0].lecturas)
                setAlertasMedias(response[0].alertas_medias)
                setAlertasRojas(response[0].alertas_rojas)
                setSensoresDeshabilitados(response[0].sensores_deshabilitados)
            } catch (error) {
                console.error(error)
            }
        }

        status()
    }, [])
    return (
        <>
            
            <Grid2 container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid2 size={{xs: 12, sm: 6, md: 3}}>
                    <Box sx={{
                        width: '290px',
                        height: '110px',
                        background: '#FFFFFF',
                        borderRadius: '15px',
                        boxSizing: 'border-box',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#8E8EA1'
                            }}>
                                Lecturas OK
                            </Typography>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#22242C'
                            }}>
                                {lecturas}
                            </Typography>
                        </Box>
                        
                        <Box component='img' src={ok} sx={{
                            width: '60px',
                            heigth: '60px',
                        }}/>
                    </Box>
                </Grid2>
                <Grid2 size={{xs: 12, sm: 6, md: 3}}>
                    <Box sx={{
                        width: '290px',
                        height: '110px',
                        background: '#FFFFFF',
                        borderRadius: '15px',
                        boxSizing: 'border-box',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#8E8EA1'
                            }}>
                                Alertas medias
                            </Typography>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#22242C'
                            }}>
                                {alertasMedias}
                            </Typography>
                        </Box>
                        
                        <Box component='img' src={alert} sx={{
                            width: '60px',
                            heigth: '60px',
                        }}/>
                    </Box>
                </Grid2>
                <Grid2 size={{xs: 12, sm: 6, md: 3}}>
                    <Box sx={{
                        width: '290px',
                        height: '110px',
                        background: '#FFFFFF',
                        borderRadius: '15px',
                        boxSizing: 'border-box',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#8E8EA1'
                            }}>
                                Alertas rojas
                            </Typography>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#22242C'
                            }}>
                                {alertasRojas}
                            </Typography>
                        </Box>
                        
                        <Box component='img' src={warning} sx={{
                            width: '60px',
                            heigth: '60px',
                        }}/>
                    </Box>
                </Grid2>
                <Grid2 size={{xs: 12, sm: 6, md: 3}}>
                    <Box sx={{
                        width: '290px',
                        height: '110px',
                        background: '#FFFFFF',
                        borderRadius: '15px',
                        boxSizing: 'border-box',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#8E8EA1'
                            }}>
                                Sensores deshabilitados
                            </Typography>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#22242C'
                            }}>
                                {sensoresDeshabilitados}
                            </Typography>
                        </Box>
                        
                        <Box component='img' src={cross} sx={{
                            width: '60px',
                            heigth: '60px',
                        }}/>
                    </Box>
                </Grid2>
            </Grid2>
        </>
    )
}

export default CardStatus;