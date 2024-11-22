import { Box, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import servicesAxios from "../../services/axios";

import ok from '../../assets/DashBoard/ok.png'
import alert from '../../assets/DashBoard/alert.png'
import warning from '../../assets/DashBoard/warning.png'

import temperature from '../../assets/DashBoard/Conditions/temperature.png'
import pressure from '../../assets/DashBoard/Conditions/pressure.png'
import wind from '../../assets/DashBoard/Conditions/wind.png'
import levels from '../../assets/DashBoard/Conditions/levels.png'
import energy from '../../assets/DashBoard/Conditions/energy.png'
import tension from '../../assets/DashBoard/Conditions/tension.png'
import co from '../../assets/DashBoard/Conditions/co.png'
import others from '../../assets/DashBoard/Conditions/others.png'

const CardConditions = () => {
    const [conditions, setConditions] = useState([])
    const conditionsImage = [
        temperature,
        pressure,
        wind,
        levels,
        energy,
        tension,
        co,
        others
    ]

    useEffect(() => {
        const getConditions = async() => {
            try {
                const response = await servicesAxios.conditions()
                setConditions(response)
            } catch (error) {
                console.error(error)
            }
        }
        getConditions()
    }, [])

    return (
        <>
            <Grid2 container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    {conditions && conditions.length > 0 ? (
                        conditions.map((condition, index) => (
                            <Grid2 key={index} size={{xs: 12, sm: 6, md: 3}}>
                            <Box key={index} sx={{
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
                                        {condition.tipo_condicion}
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
                                                {condition.lecturas}
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
                                                {condition.alertas_medias}
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
                                                {condition.alertas_rojas}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                
                                <Box component='img' src={conditionsImage[index]} sx={{
                                    width: '60px',
                                    heigth: '60px',
                                }}/>
                            </Box>
                            </Grid2>
                        ))
                    ) : (
                        <></>
                    )

                    }
            </Grid2>
        </>
    )
}

export default CardConditions;