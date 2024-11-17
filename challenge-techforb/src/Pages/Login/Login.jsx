import Box from '@mui/material/Box';

import CardLeft from '../../Components/Login/CardLeft';
import CardRight from '../../Components/Login/CardRight';

const Login = () => {

    return(
        <>
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '900px',
                background: 'linear-gradient(180deg, #33A3AA 0%, #107076 100%)',
            }}>
                <CardLeft />
                <CardRight />
            </Box>
        </>
    )
}
export default Login
