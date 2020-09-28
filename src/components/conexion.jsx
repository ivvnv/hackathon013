import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ComputerIcon from '@material-ui/icons/ComputerOutlined';


const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
    anita: false,
    pablo: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine, anita, pablo } = state;

  return (
    <Card style={{backgroundColor: '#f2f2f2', width:'200px', marginLeft:'20px', boxShadow:'0px 0px 0px 0px'}}>
      <CardContent>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"><ComputerIcon/> Conexión</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Conectado"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="No disponible"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Reunión"
          />
          <FormControlLabel
            control={<Checkbox checked={anita} onChange={handleChange} name="anita" />}
            label="Almuerzo"
          />
          <FormControlLabel
            control={<Checkbox checked={pablo} onChange={handleChange} name="pablo" />}
            label="Descanso"
          />
        </FormGroup>
      </FormControl>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
