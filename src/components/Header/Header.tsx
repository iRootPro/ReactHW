import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer} from "@material-ui/core";
import List from "@material-ui/core/List";
import {NavBar} from "../NavBar/NavBar";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export function Header() {

    const [open, setOpen] = useState<boolean>(false)
    const onCloseMenuHandler = () => {
        setOpen(false)
    }

    const onClickOpenMenuHandler = () => {
        setOpen(true)
    }
    const classes = useStyles();
    // @ts-ignore
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={onClickOpenMenuHandler} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        React HomeWork
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
            anchor={"left"}
            open={open}
            onClose={onCloseMenuHandler}
            style={{width: 200}}
            >
                <List>
                    <NavBar/>
                </List>

            </Drawer>
        </div>

    )
}