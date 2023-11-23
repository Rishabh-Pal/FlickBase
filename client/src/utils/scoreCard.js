import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    Chip
} from '@mui/material'

// import MovieIcon from '@material-ui/icons/Movie
// import PersonIcon from '@material-ui/icons/Person';
// import StarIcon from '@material-ui/icons/Star';


const ScoreCard = ({current}) => {


    return(
        <List className="scorecard">
            {/* score */}
            <ListItem>
                <ListItemAvatar>
                    <Avatar>starticon</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Our score" secondary={current.score} className="rating"/>
            </ListItem>
            <Divider variant="inset" component="li"/>

            {/* actor */}
            <ListItem>
                <ListItemAvatar>
                    <Avatar>personicon</Avatar>
                </ListItemAvatar>
                <div>
                    { current.actors.map((item,index)=>(
                        <Chip
                            key={`${index+item}`}
                            item={item}
                            label={item}
                            clickable
                            color="primary"
                            className="chip"
                        />
                    ))
                    }
                </div>
            </ListItem>
            <Divider variant="inset" component="li"/> 
            {/* director */}
            <ListItem>
                <ListItemAvatar>
                    <Avatar>movieicon</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Director" secondary={current.director}/>
            </ListItem>
        </List>
    )
}


export default ScoreCard;