import BasePage from './BasePage'
import { Avatar, Box, Card, Fab, IconButton, Paper, Typography } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AvatarMurali from '../../assets/MuraliTileAvatar.png'
import './Home.css'

function Home() {
    const CardCommonStyles = {
        borderRadius: '20px'
    }
    const avatarImageStyles = {
        height: '30%',
        width: '19%',
        borderRadius: '20px'
    }
    return (
        <BasePage
            children={
                <Box sx={{
                    display: 'grid',
                    gap: '20px',
                    padding: '40px',
                    gridTemplateColumns: 'repeat(4,1fr)',
                    gridTemplateRows: '280px 280px 280px 280px'
                }}>
                    <Paper elevation={3} variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 2', gridRow: 'span 1' }}>
                        <img src={AvatarMurali} alt="Murali" style={avatarImageStyles}></img>
                        <Typography>Hey there! I'm <span className='murali-name-label'>Murali</span>. I'm a web wizard with three years under my belt, focusing on web development for over two. I thrive on weaving digital magic, turning lines of code into captivating online experiences. Let's build something awesome together!</Typography>
                    </Paper>
                    <Paper elevation={3} variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 1' }}>
                        <Typography>Know me better.</Typography>
                        <Typography>Find my resume here.</Typography>
                        <Box>
                            {/* <IconButton sx={{ border: 'none' }}>
                                <FileDownloadIcon />
                                <Typography>Resume</Typography>
                            </IconButton> */}
                            <Fab variant="extended">
                                <FileDownloadIcon sx={{ mr: 1 }} />
                                Resume
                            </Fab>
                        </Box>
                    </Paper>
                    <Paper elevation={3} variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 2' }}>Featured work</Paper>
                    <Paper elevation={3} variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 1' }}>Contact</Paper>
                    <Paper elevation={3} variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 1' }}>Gallary</Paper>
                    <Paper elevation={3} variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 3', gridRow: 'span 1' }}>Testimonials</Paper>

                </Box>
            }
        />
    )
}

export default Home
