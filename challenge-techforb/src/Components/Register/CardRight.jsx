import { useState } from 'react';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CardRight = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    
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
                    Registrarse 
                </Typography>

                <TextField label='Email' variant='outlined' sx={{
                    width: '393px',
                    height: '58px',
                    border: '1px #DCDBDD',
                    marginBottom: '15px'
                }}/>
                <FormControl sx={{ 
                    width: '393px', 
                    height: '48px', 
                    border: '1px #DCDBDD',
                    marginBottom: '25px'
                }} variant="outlined">
                    <InputLabel htmlFor="outlined-password-1">
                        Contraseña
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-password-1"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
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
                <FormControl sx={{ 
                    width: '393px', 
                    height: '48px', 
                    border: '1px #DCDBDD',
                    marginBottom: '25px'
                }} variant="outlined">
                    <InputLabel htmlFor="outlined-password-2">
                        Repetir Contraseña
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-password-2"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <Button sx={{
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
                            Registrarse
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