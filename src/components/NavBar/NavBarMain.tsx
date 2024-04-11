import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import React, { useState } from 'react'

function NavBarMain() {
    const [value, setValue] = useState<string>('Home'); // State to keep track of the selected tab

    const handleChange = (event:any, newValue: string) => {
        console.log(newValue)
        setValue(newValue); // Update the selected tab
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                width: '100%',
                height:'100px',
                bgcolor: 'rgba(58, 58, 58, 0.2)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
            }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Murali
            </Typography>
            <Box>
                <Tabs
                    value={value}
                    onChange={(e)=>handleChange(e,value)}
                    TabIndicatorProps={{
                        sx: {
                            bgcolor: "none"
                        }
                    }}
                >
                    <Tab value={'Home'} label="Home" sx={{ color: '#ffffff' }}></Tab>
                    <Tab value={'About Me'} label="About Me" sx={{ color: '#ffffff' }}></Tab>
                    <Tab value={'Projects'} label="Projects" sx={{ color: '#ffffff' }}></Tab>
                    <Tab value={'tools'} label="Tools" sx={{ color: '#ffffff' }}></Tab>
                </Tabs>
            </Box>
            <Box>
                <IconButton sx={{ color: '#ffffff' , border:'none'}}>
                    <FileDownloadIcon />
                    <Typography>Resume</Typography>
                </IconButton>
            </Box>
        </Box>
    )
}

export default NavBarMain