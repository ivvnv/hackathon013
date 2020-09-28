import React from "react";
import { Grid, makeStyles, Box, withWidth } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import CheckIcon from '@material-ui/icons/CheckBoxOutlined';
import BuildIcon from '@material-ui/icons/Build';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 9,
  },
  pos: {
    marginBottom: 12,
  },
});


const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
}));

const Columnas = (props) => {
  const classes = estilos();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
            hai
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" align='right' style={{fontWeight:'bold'}}>
          ...
        </Typography>
        <Typography variant="h5" component="h2">
          haiyaabndjan
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <CheckIcon fontSize="small" style={{color:'#cccccc'}} />
        <BuildIcon fontSize="small" style={{color:'#cccccc'}}/>
        <CommentIcon fontSize="small" style={{color:'#cccccc'}}/>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
            uhuh
        <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" align='right' style={{fontWeight:'bold'}}>
          ...
        </Typography>
        <Typography variant="h5" component="h2">
          haiyaabndjan
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
            ajnkdkjan
        <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" align='right' style={{fontWeight:'bold'}}>
          ...
        </Typography>
        <Typography variant="h5" component="h2">
          haiyaabndjan
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth()(Columnas);
