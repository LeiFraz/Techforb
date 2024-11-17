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
            left: '-765px'
        }}>
            <Typography variant='h2'> 
                Portal de monitoreo 
            </Typography>
            <Typography variant='h2'> 
                Iniciar Sesion 
            </Typography>

            <TextField label='Email' variant='outlined' sx={{
                width: '393px',
                height: '58px',
                border: '1px #DCDBDD'
            }}/>
            <FormControl sx={{ 
                width: '393px', 
                height: '48px', 
                border: '1px #DCDBDD'
            }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    Contraseña
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
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

            <Typography variant='p'>
                ¿Olvidaste tu contraseña?
            </Typography>
            <Button sx={{
                width: '164px',
                height: '48px',
                gap: '0px',
                borderRadius: '12px',
                opacity: '0px',
                backgroundColor: '#33A3AA'
            }}> 
                <Typography variant='p' sx={{
                    color: '#FFFFFF'
                }}>
                    Iniciar sesión
                </Typography>
            </Button>
            <Typography>
                Protegido por reCAPTCHA y sujeto a la{" "}
                <Typography component="span" variant="body1" sx={{
                    color: '#33A3AA'
                }}>
                    Política de Privacidad 
                </Typography>
                {" "}y{" "}
                <Typography component="span" variant="body1" sx={{
                    color: '#33A3AA'
                }}>
                    Condiciones 
                </Typography>
                .
            </Typography>
        </Box>
    )
}

export default CardRight