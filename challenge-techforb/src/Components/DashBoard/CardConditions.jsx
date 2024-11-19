import { Box, Grid2, Typography } from "@mui/material";
import ok from '../../assets/DashBoard/ok.png'
import alert from '../../assets/DashBoard/alert.png'
import warning from '../../assets/DashBoard/warning.png'
import cross from '../../assets/DashBoard/cross.png'

const CardConditions = () => {
    
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
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left'
                        }}>
                            <Typography variant='p' sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#8E8EA1',
                            }}>
                                Temperatura
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                gap: '20px'
                            }}>
                                 <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                 }}>
                                    <Box component='img' src={ok} sx={{
                                        width: '14px',
                                        heigth: '14px',
                                        mr: '5px'
                                    }}/>
                                    <Typography variant='p' sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        color: '#000000'
                                    }}>
                                        100
                                    </Typography>
                                 </Box>
                                
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box component='img' src={alert} sx={{
                                        width: '14px',
                                        heigth: '14px',
                                        mr: '5px'
                                    }}/>
                                    <Typography variant='p' sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        color: '#000000'
                                    }}>
                                        20
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box component='img' src={warning} sx={{
                                        width: '14px',
                                        heigth: '14px',
                                        mr: '5px'
                                    }}/>
                                    <Typography variant='p' sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        color: '#000000'
                                    }}>
                                        3
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box component='img' src={ok} sx={{
                            width: '60px',
                            heigth: '60px',
                        }}/>
                    </Box>
                </Grid2>
            </Grid2>
        </>
    )
}

export default CardConditions;