import NavBarMain from '../../components/NavBar/NavBarMain'
import { Box } from '@mui/material'

interface BasePageProps {
    title?: string | React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

const BasePage: React.FC<BasePageProps> = ({ title, children, className }) => {
    return (
        <Box sx={{ width: '100%', paddingTop: '100px' }}>
            <NavBarMain />
            {children}
        </Box>
    )
}

export default BasePage