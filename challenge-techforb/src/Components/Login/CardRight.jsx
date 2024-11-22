import { useState } from 'react';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import servicesAxios from '../../services/axios.js';
import { useNavigate } from 'react-router-dom'

const CardRight = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({correo: '', contrasenia: ''})
    const navigate = useNavigate()
    const emailER = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
    const passwordER = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleForm = (e) => {
        const { name, value } = e.target;
        setForm((input) => ({...input, [name]: value}));
    };

    const login = async() => 
    {
        try {
            const emailValid = emailER.test(form.correo)
            const correoValid = passwordER.test(form.contrasenia)

            if (emailValid && correoValid)
            {
                const response = await servicesAxios.login({
                    correo: form.correo,
                    contrasenia: form.contrasenia
                })
    
                if(response)
                {
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('nombre', response.data.nombre)
                    
                    console.log('Inicio de sesion exitoso')
    
                    navigate('/dashboard')
                }
            }else{
                let msgEmail = ''
                let msgContrasenia = ''
                if (!emailValid) {
                    msgEmail = 'Email invalido.\n\n'
                }
                if (!correoValid) {
                    msgContrasenia = 'Contraseña invalida: Debe contener como minimo 8 caracteres, entre ellos 1 letra y 1 numero'
                }
                alert(`${msgEmail? msgEmail: ''}${msgContrasenia? msgContrasenia: ''}`)
            }

        } catch (error) {
            console.error('No se pudo iniciar sesion ', error.message)
        }
    }
    
    return(
        <Box sx={{
            width: '675px',
            maxWidth: '675px',
            height: '900px',
            backgroundColor: '#FFFFFF',
            color: '#202020',
            borderRadius: '32px 0px 0px 32px',
            marginLeft: '-10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Box sx={{
                width: '393px',
                maxWidth: '675px',
                textAlign: 'left'
            }}>
                <Typography variant='h2' sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '36.48px',
                    fontWeight: '600',
                }}> 
                    Portal de monitoreo 
                </Typography>
                <Typography sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '25px',
                    fontWeight: '500',
                    marginBottom: '30px'
                }}> 
                    Iniciar Sesión 
                </Typography>

                <TextField label='Email' variant='outlined' name="correo" value={form.correo} onChange={handleForm} sx={{
                    width: '393px',
                    height: '58px',
                    border: '1px #DCDBDD',
                    marginBottom: '15px'
                }} />
                <FormControl sx={{ 
                    width: '393px', 
                    height: '48px', 
                    border: '1px #DCDBDD',
                    marginBottom: '25px'
                }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Contraseña
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        name='contrasenia'
                        value={form.contrasenia}
                        onChange={handleForm}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <Typography variant='p' sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        fontWeight: '400',
                    }}>
                        ¿Olvidaste tu contraseña?
                    </Typography>
                    <Button onClick={login} sx={{
                        width: '164px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: '#33A3AA',
                    }}> 
                        <Typography variant='p' sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: '500',
                            textTransform: 'capitalize',
                            color: '#FFFFFF'
                        }}>
                            Iniciar sesión
                        </Typography>
                    </Button>
                </Box>

                <Typography variant='p' sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: '400',
                }}>
                    Protegido por reCAPTCHA y sujeto a la{" "}
                    <Typography component="span" variant="body1" sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12px',
                        color: '#33A3AA'
                    }}>
                        Política de Privacidad 
                    </Typography>
                    {" "}y{" "}
                    <Typography component="span" variant="body1" sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12px',
                        color: '#33A3AA'
                    }}>
                        Condiciones 
                    </Typography>
                    .
                </Typography>
            </Box>

        </Box>
    )
}

export default CardRight