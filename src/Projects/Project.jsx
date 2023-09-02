import React from 'react'
import './projects.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Project({ name, description, thumbnail }) {
    return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image={thumbnail}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={()=>{
                        
                    }} size="small" color="primary">
                        More
                    </Button>
                </CardActions>
            </Card>
    )
}
