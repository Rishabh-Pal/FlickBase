import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import  CardMedia  from '@mui/material/CardMedia';




const ArticleCard = ({article}) => {

    return(
        <Card>
            <CardMedia
                style={{ height:0,paddingTop:'56.25%'}}
                image="https://picsum.photos/200"
                title="some title"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { article.title}
                </Typography>
                <Typography variant="body2" component="p">
                   { article.excerpt }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    {/* <FavoriteIcon/> */}
                    FavoriteIcon
                </IconButton>
                <Button size="small" color="primary" component={RouterLink} to={`/article/${article._id}`}>
                    View article
                </Button>
            </CardActions>
        </Card>
    )
}


export default ArticleCard;