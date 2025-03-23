import React, { useState } from 'react';
import { RecipeType } from '../models/models';
import { red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
interface RecipeProps {
  food: RecipeType;
  // expand: boolean;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)'
      }
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)'
      }
    }
  ]
}));

export const Recipe: React.FC<RecipeProps> = ({ food }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const calculateOutputTime = () => {
    if (food.time < 61) return `${food.time} min`;
    let hours = Math.floor(food.time / 60);
    let minutes = food.time % 60;
    return `${hours} hr ${minutes}min`;
  };
  return (
    <div className='recipe-container'>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={food.title}
          subheader={calculateOutputTime()}
        />
        <CardMedia
          component='img'
          height='194'
          image='https://mui.com/static/images/cards/paella.jpg'
          alt={food.title}
        />
        <CardContent>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {food.preview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Ingredients:</Typography>
            {food.ingredients.map((ingredient) => {
              let output =
                ingredient.amount === 'sprinkle'
                  ? `     ${ingredient.ingredient}`
                  : `${ingredient.amount} ${ingredient.ingredient}`;
              return (
                <Typography sx={{ marginBottom: 2 }}>{output} </Typography>
              );
            })}

            <Typography sx={{ marginBottom: 2 }}>Instructions:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              {food.instructions}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
