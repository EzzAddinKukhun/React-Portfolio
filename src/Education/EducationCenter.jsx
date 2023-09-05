import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EducationCenter({element}) {
  return (
    <Card className='mb-3' sx={{maxHeight: 400}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="180"
        image={element.thumbnail}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom component="div" className='d-flex justify-content-between align-items-center' >
          <h5><b>{element.learningCenter}</b>, <b>{element.city}</b></h5>
          <h6 className="text-secondary">{element.startDate} - {element.endDate}</h6>
        </Typography>
        <Typography gutterBottom component="div" className='d-flex justify-content-between align-items-center' >
          <h6><b>{element.degree}</b></h6>
          <h6 className="text-secondary">{element.grade}</h6>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
