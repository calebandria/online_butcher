import SearchBar from '../SearchBar/SearchBar';
import { IconButton } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarStyle from './NavBarStyle';


function NavBar({handleOverlay}) { 

    return (
        <NavBarStyle>
            <h2>Navbar here</h2>
            <IconButton 
            sx={{ p: '10px' }} 
            aria-label="menu" 
            onClick={()=>{handleOverlay()}}>
                <MenuIcon />
            </IconButton>
            <SearchBar />
            <IconButton>
                <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton>
                <ShoppingBagOutlinedIcon />
            </IconButton>

        </NavBarStyle>
    )
}

export default NavBar;