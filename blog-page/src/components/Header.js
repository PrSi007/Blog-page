import { Divider, Toolbar, IconButton, Typography } from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './SideDrawer'
const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1
    },
    tagline: {
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "centre",
        fontFamily: "Montserrat"
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Toolbar>
                <SideDrawer>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </SideDrawer>

                <Typography variant="h6" className={classes.title}>Blogging Website</Typography>

                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton color="inherit">
                    < AccountCircleIcon />
                </IconButton>


            </Toolbar>

            <Divider />

            <Toolbar className={classes.tagline}>
                Express Your emotions through words
            </Toolbar>


        </>
    );
}

export default Header;