import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from "../utils/API"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const addToCart = () => {
    console.log("I was clicked");
    console.log(props);
    API.saveToCart({
        product_name: props.name,
        image: props.image,
        price: props.price
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })

  }

    return (
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.price}
              </Typography>
            </CardContent>
          <CardActions
            onClick={addToCart}
          >
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      );
  
 
}