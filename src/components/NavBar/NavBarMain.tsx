import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import React, { useState } from 'react'
import './TabMenuStyles.css'

function NavBarMain() {
    const [value, setValue] = useState<string>('Home'); // State to keep track of the selected tab

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        console.log(newValue)
        setValue(newValue); // Update the selected tab
    };
    const [selectedTab, setSelectedTab] = useState<number>(0); // State to keep track of the selected tab

    const handleTabClick = (index:number) => {
        setSelectedTab(index); // Update the selected tab
    };

    const tabButtonStyle = {
        color: 'inherit',
        borderRadius: '50px',
        border: '0px',
        transition: 'background-color 0.3s, color 0.3s',
        '&.Mui-selected': { color: '#000', bgcolor: '#fff' }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '100px',
                bgcolor: 'rgba(58, 58, 58, 0.2)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
            }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
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
                <nav>
                    <a href='#' className={selectedTab === 0 ? 'selected' : ''} onClick={() => handleTabClick(0)}>Home</a>
                    <a href='#' className={selectedTab === 1 ? 'selected' : ''} onClick={() => handleTabClick(1)}>About Me</a>
                    <a href='#' className={selectedTab === 2 ? 'selected' : ''} onClick={() => handleTabClick(2)}>Projects</a>
                    <a href='#' className={selectedTab === 3 ? 'selected' : ''} onClick={() => handleTabClick(3)}>Tools</a>
                    <div className="animation" style={{ left: selectedTab * 100 }}></div>
                </nav>
            </Box>
            <Box>
                <IconButton sx={{ color: '#ffffff', border: 'none' }}>
                    <FileDownloadIcon />
                    <Typography>Resume</Typography>
                </IconButton>
            </Box>
        </Box>
    )
}

export default NavBarMain