import { Box, Fab, IconButton, Tab, Tabs, Typography } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import React, { useState } from 'react'
import './TabMenuStyles.css'
import { Link } from 'react-router-dom';

function NavBarMain() {
    const [value, setValue] = useState<string>('Home'); // State to keep track of the selected tab

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        console.log(newValue)
        setValue(newValue); // Update the selected tab
    };
    const [selectedTab, setSelectedTab] = useState<number>(0); // State to keep track of the selected tab

    const handleTabClick = (index: number) => {
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
                    <Link to='/' className={selectedTab === 0 ? 'selected' : ''} onClick={() => handleTabClick(0)}>Home</Link>
                    <Link to='/about-me' className={selectedTab === 1 ? 'selected' : ''} onClick={() => handleTabClick(1)}>About Me</Link>
                    <Link to='/projects' className={selectedTab === 2 ? 'selected' : ''} onClick={() => handleTabClick(2)}>Projects</Link>
                    <Link to='/tools' className={selectedTab === 3 ? 'selected' : ''} onClick={() => handleTabClick(3)}>Tools</Link>
                    <div className="animation" style={{ left: selectedTab * 100 }}></div>
                </nav>
            </Box>
            <Box>
                <Fab variant="extended" sx={{backgroundColor:'#6464643c', color:'#ffffff'}}>
                    <FileDownloadIcon sx={{ mr: 1 }} />
                    Resume
                </Fab>
            </Box>
        </Box>
    )
}

export default NavBarMain