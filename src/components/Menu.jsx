import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import enyoi from '../assets/enyoi.jpg'
import { Link } from 'react-router-dom';

export default function Menu(){
    const navItems = ['Principal', 'Portafolio', 'Usuarios', 'Administracion', 'Informacion general'];
    return (
        <AppBar component="nav" className='p-3' style={{display: "contents"}}>
          <Toolbar className='flex justify-between bg-blue-500 p-3'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <img src={enyoi} alt="enyoi" style={{width: "5%", height: "5%", borderRadius: "100%"}} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link to={item != "Principal" ? `/${item}` : '/'}>
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
    )
}