import React, { useEffect, useState } from 'react';
import { RecipeType, TagType } from '../models/models';
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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { IngredientTable } from './IngredientTable';
import axios from 'axios';
import { RecipeTagType } from '../models/models';
import { fetchDataAll } from '../hooks/useAxios';
import { RecipeTagTypesSchema, TagTypesSchema } from '../schema/schemas';

interface RecipeProps {
  recipe: RecipeType;
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

export const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  const [recipeTags, setRecipeTags] = useState<RecipeTagType[] | null>([]);
  const [tags, setTags] = useState<TagType[] | null>([]);
  const [currentTags, setCurrentTags] = useState<TagType[] | null>([]);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const getRecipeTags = async () => {
      try {
        const loadDataRecipeTag = async () => {
          const recipeTags = await fetchDataAll(
            '/v1/recipetag/',
            RecipeTagTypesSchema
          );
          setRecipeTags(recipeTags);
        };
        loadDataRecipeTag();
        const loadDataTags = async () => {
          const tags = await fetchDataAll('/v1/tag/', TagTypesSchema);
          setTags(tags);
        };

        loadDataTags();
        if (recipeTags != null && tags != null) {
          const tagIds = recipeTags.map((t: RecipeTagType) => t.tagId);
          const currentTags = tags.filter((tag: TagType) =>
            tagIds.includes(tag.id)
          );
          setCurrentTags(currentTags);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    getRecipeTags();
  }, [recipeTags, tags]);

  const handleClick = () => {
    console.log('You clicked this. Functionality TBA');
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const calculateOutputTime = () => {
    if (recipe.time < 61) return `${recipe.time} min`;
    let hours = Math.floor(recipe.time / 60);
    let minutes = recipe.time % 60;
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
          title={recipe.title}
          subheader={calculateOutputTime()}
        />
        {/* <CardMedia
          component='img'
          height='194'
          image={food.img}
          alt={food.title}
        /> */}
        <CardContent>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {recipe.preview}
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
            <Typography sx={{ marginBottom: 2 }}>Ainesosat:</Typography>
            {/* <IngredientTable ingredients={food.ingredients} /> */}
            <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
              Ohje:
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              {recipe.instructions}
            </Typography>
            <Stack direction='row' spacing={1}>
              {currentTags &&
                currentTags.map((tag) => {
                  return (
                    <Chip
                      key={tag.id}
                      label={tag.tag}
                      variant='outlined'
                      onClick={handleClick}
                    />
                  );
                })}
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
