import React from 'react'
import './projects.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CustomizedDialogs from '../Dialog/CustomizedDialogs';
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import './projects.css'
export default function Project({ element, openDialog }) {

    return (
        <>
            <Card className="project-card" >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image={element.thumbnail}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b>{element.projectName}</b>
                        </Typography>
                        <Typography style={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
                            {element.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='card-actions'>
                    <Button onClick={openDialog} size="small" color="primary">
                        More
                    </Button>
                    <div className='links ms-auto'>
                        <a href={element.youtubeLink} target='_blank'><YouTubeIcon color='red' /></a>
                        <a href={element.githubLink} target='_blank'><GitHubIcon /></a>
                    </div>


                </CardActions>
            </Card>
        </>
    )
}
