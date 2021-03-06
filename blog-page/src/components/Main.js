import Typography from '@material-ui/core/Typography'
import { posts } from '../data/Data'
import {Grid,Divider} from '@material-ui/core'
import Markdown from 'markdown-to-jsx'

const Main = ({title}) => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {title}    
            </Typography>
            <Divider />
            {
                posts.map(post => (
                    <Markdown key={post.body}>
                        {post.body}
                    </Markdown>
                ))
            }
        </Grid>
    );
};
 
export default Main;