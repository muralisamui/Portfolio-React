import BasePage from './BasePage'
import { Box, Card } from '@mui/material'

function Home() {
    const CardCommonStyles = {
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
                    <Card variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 2', gridRow: 'span 1' }}>
                        avatar and my info
                    </Card>
                    <Card variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 1' }}>My Resume</Card>
                    <Card variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 2' }}>Featured work</Card>
                    <Card variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 1' }}>Contact</Card>
                    <Card variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 1' }}>Gallary</Card>
                    <Card variant='outlined' sx={{ ...CardCommonStyles, gridColumn: 'span 3', gridRow: 'span 1' }}>Testimonials</Card>

                </Box>
            }
        />
    )
}

export default Home
