import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Image from '../components/maincard.jpg'

const useStyles = makeStyles({

    font: {
        fontFamily: "'Limelight', cursive;",
        fontSize: 20
    },
    title: {
        fontSize: 40,
        fontFamily: "'Limelight', cursive;"
    },
    cover: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: "centre",
        padding: "35px 25px",
    },
    btn: {
        backgroundColor: "#78909c"        
    }
});

const FeaturedPost = () => {
    const classes = useStyles()
    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom>Title</Typography>
                <Typography variant="h5" className={classes.font}>
                Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic 
                glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag.
                </Typography>        
            </CardContent>

            <CardActions>
                <Button variant="text" className={classes.btn}>Read More...</Button>
            </CardActions>
        </Card>
    );
}
 
export default FeaturedPost;