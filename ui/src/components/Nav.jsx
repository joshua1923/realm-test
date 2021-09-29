import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";
import {Link, useLocation } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import BurstModeIcon from '@mui/icons-material/BurstMode';

const Nav = () => {
    const pathname = useLocation();
    const [value, setValue] = useState(pathname);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10}>
        <BottomNavigation showLabels={true} value={value} onChange={handleChange}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
            <BottomNavigationAction label="Gallery" icon={<BurstModeIcon />} component={Link} to="/gallery" />
            <BottomNavigationAction label="About" icon={<InfoIcon />} component={Link} to="/about" />
        </BottomNavigation>
        </Paper>
    )
}

export default Nav;