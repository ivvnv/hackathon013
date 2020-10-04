import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import { useHistory} from 'react-router-dom'
import Planificacion from './Planificacion'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://i.ibb.co/HKgSR3b/imagenEY.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#000",
    "&:hover": {
      color: "#000",
      backgroundColor: "#FFE600",
    },
    backgroundColor: "#FFE600",
  },
  check: {
    color: "#FFE600",
  },
  link: {
    color: "#000",
  },
  h1: {
    color: "#FFE600",
  },
  p: {
    color: "#FFF",
  },
  logo: {
    width: "112px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const user = useUser();

  const firebase = useFirebaseApp();

  const submit = async (e) => {
    e.preventDefault();
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
      alert("Acceso Exitoso");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      history.push('/planificacion');
    })
    .catch((error) => {
      alert('Correo o Contraseña Invalida');
      const errorMessage = error.message;
      console.log(errorMessage);
    }); 
    

  };
  const submitGoogle = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
     history.push('/planificacion');
        
  };

  return (
    <div>   
    {
    !user &&
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}> 
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/*  <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={(ev) => setEmail(ev.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(ev) => setPassword(ev.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" className={classes.check}/>}
              label="Recordar mis datos"
              
            />
            <Button
              onClick={submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar sesión
            </Button>
            <Button
              onClick={submitGoogle}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar con Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/recover" variant="body2" className={classes.link}>
                  Olvidé mi contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" className={classes.link}>
                  {"¿No tienes cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    }
    {
      user && <Planificacion />
    }
   </div>
    
  );
}
