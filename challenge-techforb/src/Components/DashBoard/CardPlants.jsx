import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import servicesAxios from "../../services/axios";
import ModalCreatePlant from '../Modal/ModalCreatePlant'

const CardPlants = () => {

    const [datos, setDatos] = useState('')
    
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(()=> {

        const obtenerPlantas = async() => {
            try {
                const response = await servicesAxios.plants();

                setDatos(response)

            } catch (error) {
                console.error(error)
            }
        }

        obtenerPlantas();
    }, [])
    return (
        <>
            <ModalCreatePlant isOpen={isOpen} onClose={closeModal} >
            <Button onClick={closeModal} sx={{
                    border: '1px solid #33A3AA',
                    borderRadius: '5px',
                    width: '100px',
                    height: '36px',
                    backgroundColor: '#FFFFFF',
                    mr: '20px'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#33A3AA',
                        }}>
                            Cancelar
                        </Typography>
                    </Button>
            </ModalCreatePlant>
            
            <Box sx={{
                width: {xs: '320px', sm: '500px' , md: '600px', lg: 'calc(1440px - 80px)'},
                maxWidth: '1230px', //para mi pantalla
                height: '350px',
                background: '#FFFFFF',
                borderRadius: '15px',
                boxSizing: 'border-box',
                padding: '20px',
                display: 'flex',
                flexDirection:'column',
                margin: '20px 0px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    pb: '15px',
                    borderBottom: '1px solid #F3F6F7 '
                }}>
                    <Typography variant='p' sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#000000',
                        m: '0px 30px'
                    }}>
                        Plantas
                    </Typography>
                    <Button onClick={openModal} sx={{
                        border:'1px solid #B0CAD1',
                        borderRadius: '5px',
                        width: '170px',
                        height: '28px',
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: '#000000'
                        }}>
                           + Crear nueva planta
                        </Typography>
                    </Button>
                </Box>

                <TableContainer component='Paper'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontSize: '14px', fontWeight: '500', fontFamily: 'Poppins, sans-serif', color: '#B0CAD1'}}>
                                    Pais
                                </TableCell>
                                <TableCell sx={{fontSize: '14px', fontWeight: '500', fontFamily: 'Poppins, sans-serif', color: '#B0CAD1'}} align="right">
                                    Nombre de la Planta
                                </TableCell>
                                <TableCell sx={{fontSize: '14px', fontWeight: '500', fontFamily: 'Poppins, sans-serif', color: '#B0CAD1'}} align="right">
                                    Lecturas
                                </TableCell>
                                <TableCell sx={{fontSize: '14px', fontWeight: '500', fontFamily: 'Poppins, sans-serif', color: '#B0CAD1'}} align="right">
                                    Alertas medias
                                </TableCell>
                                <TableCell sx={{fontSize: '14px', fontWeight: '500', fontFamily: 'Poppins, sans-serif', color: '#B0CAD1'}} align="right">
                                    Alertas rojas
                                </TableCell>
                                <TableCell sx={{fontSize: '14px', fontWeight: '500', fontFamily: 'Poppins, sans-serif', color: '#B0CAD1'}} align="right">
                                    Acciones
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { datos ? (
                                 datos.map((dato, index) => (
                                    <TableRow key={index} sx={{ 
                                        '&:last-child td, &:last-child th': { border: 0 } 
                                    }}>
                                        <TableCell component="th" scope="row">
                                            <Box component='img' src={dato.bandera} sx={{
                                                width: '18px',
                                                height: '12.38px',
                                                mr: '10px'
                                            }}/>
                                            {dato.pais}
                                        </TableCell>
                                        <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                            {dato.nombre}
                                        </TableCell>
                                        <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                            {dato.lecturas}
                                        </TableCell>
                                        <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                            {dato.alertas_medias}
                                        </TableCell>
                                        <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                            {dato.alertas_rojas}
                                        </TableCell>
                                        <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                            <MoreVertIcon sx={{
                                                width: '12.05px',
                                                color: '#425662'
                                            }}/>
                                        </TableCell>
                                    </TableRow>
                                 ))
                            ) : (
                                <TableRow key={1} sx={{ 
                                    '&:last-child td, &:last-child th': { border: 0 } 
                                }}>
                                    <TableCell component="th" scope="row">
                                        <Box component='img' src={''} sx={{
                                            width: '18px',
                                            height: '12.38px',
                                            mr: '10px'
                                        }}/>
                                        {''}
                                    </TableCell>
                                    <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                        {''}
                                    </TableCell>
                                    <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                        {''}
                                    </TableCell>
                                    <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                        {''}
                                    </TableCell>
                                    <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                        {''}
                                    </TableCell>
                                    <TableCell sx={{fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', color: '#000000'}} align="right">
                                        <MoreVertIcon sx={{
                                            width: '12.05px',
                                            color: '#425662'
                                        }}/>
                                    </TableCell>
                                </TableRow>
                            )
                                
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default CardPlants;