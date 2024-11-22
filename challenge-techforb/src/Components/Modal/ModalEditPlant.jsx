import { Box, Button, TextField, Typography } from "@mui/material";
import './ModalEditPlant.css'
import {useEffect, useState } from "react";
import servicesAxios from "../../services/axios";

const ModalEditPlant = ({ edit, setEdit, setAction, action, plant, children }) => {

    const [form, setForm] = useState({nombre: plant.nombre, pais: plant.pais, lecturas: '', alertas_medias: '', alertas_rojas: '', sensores_deshabilitados: ''})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((input) => ({...input, [name]: value}));
    }


    useEffect(() => {
        const actualizar = () => {
            if(plant)
            {
                setForm((items) => ({...items, ...plant}))
            }
        }
        actualizar()
    }, [plant])

    const editPlant = async() => {
        try {
                const plantEdited = Object.entries(form).filter(([key,item]) => item !== '')
                // console.log(plantEdited)
                const objetoPlantas = plantEdited.reduce((obj, item) => {
                    obj[item[0]] = item[1];
                    return obj;
                    }, {});
                // console.log(objetoPlantas)
                
                const response = await servicesAxios.editPlant(objetoPlantas)

                if(response)
                {   
                    console.log('Se edito la planta exitosamente')
                    alert('se edito la planta exitosamente')
                    setEdit(!edit)
                    setAction(!action)
                }

        } catch (error) {
            console.error('No se pudo crear la planta ', error.message)
        }
    }

    return(
        <>
            <Box className={`overlay ${edit ? 'visible' : 'hidden'} overlayModal`} >
                <Box className="content" onClick={(e) => e.stopPropagation()}>
                    <Box sx={{
                        width:'415px',
                        m: 'auto',
                        mb: '5px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#000000',
                            textAlign: 'left',
                            mb: '15px'
                        }}>
                            Editar Planta
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '15px'}}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#838B9E',
                                    textAlign: 'left',
                                    mb: '5px'
                                }}>
                                    
                                    Nombre Planta
                                </Typography>
                                <TextField id="filled-edit" disabled name="nombre" size="small" value={plant.nombre} defaultValue={plant.nombre} onChange={handleChange} sx={{
                                    width: '200px',
                                    mb: '5px',
                                }}/>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#838B9E',
                                    textAlign: 'left',
                                    mb: '5px'
                                }}>
                                    Pais
                                </Typography>
                                <TextField id="filled-edit" disabled name="pais" size="small" defaultValue={plant.pais} value={plant.pais} onChange={handleChange} sx={{
                                    width: '200px',
                                    mb: '5px'
                                }}/>
                            </Box>
                        </Box>
                        
                        <Box sx={{ display: 'flex', gap: '15px'}}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#838B9E',
                                    textAlign: 'left',
                                    mb: '5px'
                                }}>
                                    Lecturas
                                </Typography>
                                <TextField id="filled-edit" label="ingrese lecturas" name="lecturas" size="small" value={form.lecturas} onChange={handleChange} sx={{
                                    width: '200px',
                                    mb: '5px'
                                }}/>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#838B9E',
                                    textAlign: 'left',
                                    mb: '5px'
                                }}>
                                    Alertas Medias
                                </Typography>
                                <TextField id="filled-edit" label="ingrese alertas medias" name="alertas_medias" size="small" value={form.alertas_medias} onChange={handleChange} sx={{
                                    width: '200px',
                                    mb: '5px'
                                }}/>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '15px'}}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#838B9E',
                                    textAlign: 'left',
                                    mb: '5px'
                                }}>
                                    Alertas Rojas
                                </Typography>
                                <TextField id="filled-edit" label="ingrese alertas rojas" name="alertas_rojas" size="small" value={form.alertas_rojas} onChange={handleChange} sx={{
                                    width: '200px',
                                    mb: '5px'
                                }}/>
                            </Box>
                            
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#838B9E',
                                    textAlign: 'left',
                                    mb: '5px'
                                }}>
                                    Sensores Deshabilitados
                                </Typography>
                                <TextField id="filled-edit" label="ingrese sensores" name="sensores_deshabilitados" size="small" value={form.sensores_deshabilitados} onChange={handleChange} sx={{
                                    width: '200px',
                                    mb: '5px'
                                }}/>
                            </Box>
                        </Box>

                    </Box>

                    {children}
                    <Button onClick={editPlant} sx={{
                        borderRadius: '5px',
                        width: '100px',
                        height: '36px',
                        backgroundColor: '#33A3AA'
                    }}> 
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#FFFFFF',
                        }}>
                            Editar 
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default ModalEditPlant