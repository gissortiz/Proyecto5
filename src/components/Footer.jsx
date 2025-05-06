import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#C8E6C9',
                color: 'black',
                padding: '20px',
                marginTop: '40px',
                textAlign: 'center',
            }}
        >
            <Typography variant="body1">
                Verde en Casa © {new Date().getFullYear()} — Hecho con 🫶 por Gissella Ortiz
            </Typography>
            <Typography variant="caption">
                Pasión por la naturaleza 🌻, la tecnología 💻.
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                    📸 Instagram: @verdeen.casa &nbsp; | &nbsp;
                    🐦 Twitter: @verdeencasa_app &nbsp; | &nbsp;
                    🌐 Web: www.verdeen.casa
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
