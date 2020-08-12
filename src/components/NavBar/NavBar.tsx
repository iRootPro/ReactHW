import React from "react";
import {NavLink} from "react-router-dom";
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import {ListItemIcon} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import classes from './NavBar.module.css'

export function NavBar() {
    return (
        <div>
            <ListItem>
                <ListItemIcon><ChevronRightTwoToneIcon/></ListItemIcon>
                <NavLink to={'/preJunior'} activeClassName={classes.active}>preJunior</NavLink>
            </ListItem>
            <ListItem>
                <ListItemIcon><ChevronRightTwoToneIcon/></ListItemIcon>
                <NavLink to={'/Junior'} activeClassName={classes.active}>Junior</NavLink>
            </ListItem>
            <ListItem>
                <ListItemIcon><ChevronRightTwoToneIcon/></ListItemIcon>
                <NavLink to={'/JuniorPlus'} activeClassName={classes.active}>Junior+</NavLink>
            </ListItem>
        </div>
    )
}