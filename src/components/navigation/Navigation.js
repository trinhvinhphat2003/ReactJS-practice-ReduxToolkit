import { AppBar, Button, Switch, Toolbar, useMediaQuery, IconButton, Drawer, Box, Grid, Avatar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography"
import "./Navigation.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useTheme } from "@emotion/react";
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const Navigation = ({ setMode, mode }) => {

    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, isOpen] = useState(false)

    const [checked, isChecked] = useState(localStorage.getItem("mode") === "light" ? false : true);

    const navigagte = useNavigate()

    const handleToggle = () => {
        isChecked(!checked);
        setMode(localStorage.getItem("mode") === "light" ? () => { localStorage.setItem("mode", "dark"); return localStorage.getItem("mode") } : () => { localStorage.setItem("mode", "light"); return localStorage.getItem("mode") })
    }

    return (
        <AppBar position="static" color="primary" className="nav-bar">
            <Toolbar>
                <Typography variant="h5" style={{ cursor: "pointer" }} sx={{ flexGrow: 1 }} onClick={() => navigagte("/")}>
                    FILM
                </Typography>
                {
                    isMd ?
                        (
                            <>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={() => { isOpen(true) }}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <Drawer open={open} onClose={() => { isOpen(false) }} anchor="left">
                                    <Box width={"250px"}>
                                        <Grid container spacing={2} p={2}>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => { isOpen(false) }}><NavLink to={"/"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><HomeIcon /> home</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => { isOpen(false) }}><NavLink to={"/contact"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><ContactPageIcon /> contact</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => { isOpen(false) }}><NavLink to={"/about"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><InfoIcon /> about</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => { isOpen(false) }}><NavLink to={"/news"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><NewReleasesIcon /> news</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Switch
                                                    checked={checked}
                                                    onClick={handleToggle}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => { isOpen(false) }}><NavLink to={"/login"} exact="true" className={"link"}>login</NavLink></Button>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </Drawer>
                            </>
                        )
                        :
                        (
                            <>
                                <Button color="inherit"><NavLink to={"/"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><HomeIcon /> home</NavLink></Button>
                                <Button color="inherit"><NavLink to={"/contact"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><ContactPageIcon /> contact</NavLink></Button>
                                <Button color="inherit"><NavLink to={"/about"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><InfoIcon /> about</NavLink></Button>
                                <Button color="inherit"><NavLink to={"/news"} exact="true" className={"link"} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}><NewReleasesIcon /> news</NavLink></Button>
                                <Switch
                                    checked={checked}
                                    onClick={handleToggle}
                                />
                                <Button color="inherit"><NavLink to={"/login"} exact="true" className={"link"}>login</NavLink></Button>

                            </>
                        )
                }




            </Toolbar>
        </AppBar>
    )
}

export default Navigation;