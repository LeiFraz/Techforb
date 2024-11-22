import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import './ModalCreatePlants.css'
import {useEffect, useState } from "react";
import servicesAxios from "../../services/axios";

const ModalCreatePlant = ({ isOpen, setIsOpen, setAction, action, children }) => {

    const [form, setForm] = useState({nombre: '', pais: ''})
    const [paises, setPaises] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((input) => ({...input, [name]: value}));
    }


    useEffect(() => {
        const traerPaises = async() => {
            try {
                const response = await servicesAxios.traerPaises()
                setPaises(response)
            } catch (error) {
                console.error(error)
            }
        }

        traerPaises();
    }, [paises])

    const createPlant = async() => 
        {
            try {
                if (form.nombre != '' && form.pais != '') {
                    const response = await servicesAxios.createPlant({
                        nombre: form.nombre,
                        pais: form.pais
                    })
        
                    if(response)
                    {   
                        console.log('Se creo la planta exitosamente')
                        alert('se creo la planta exitosamente')
                        setIsOpen(!isOpen)
                        setAction(!action)
                    }
                }
    
            } catch (error) {
                console.error('No se pudo crear la planta ', error.message)
            }
        }

    return(
        <>
            <Box className={`overlay ${isOpen ? 'visible' : 'hidden'} overlayModal`} >
                <Box className="content" onClick={(e) => e.stopPropagation()}>
                    <Box sx={{
                        width:'320px',
                        m: 'auto',
                        mb: '15px'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#000000',
                            textAlign: 'left',
                            mb: '30px'
                        }}>
                            Crear nueva Planta
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#838B9E',
                            textAlign: 'left',
                            mb: '10px'
                        }}>
                            Nombre Planta
                        </Typography>
                        <TextField id="filled-basic" label="ingrese nombre" name="nombre" value={form.nombre} onChange={handleChange} sx={{
                            width: '320px',
                            mb: '15px'
                        }}/>

                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#838B9E',
                            textAlign: 'left',
                            mb: '10px'
                        }}>
                            Pais
                        </Typography>
                        <FormControl sx={{
                            width: '320px'
                        }}>
                            <InputLabel id="demo-simple-select-label">Seleccione Pais</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={form.pais}
                            label="pais"
                            name="pais"
                            onChange={handleChange}
                            sx={{textAlign: 'left'}}
                            >
                            { paises.length > 0 ? (
                                paises.map((pais, index) => (
                                    <MenuItem key={index} value={pais.name}>{pais.name}</MenuItem>
                                ))
                            ) : (
                                <MenuItem >{'---'}</MenuItem>
                            )

                            }

                            </Select>
                        </FormControl>
                    </Box>

                    {children}
                    <Button onClick={createPlant} sx={{
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
                            Crear 
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default ModalCreatePlant