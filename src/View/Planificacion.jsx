import React from 'react';
import { useFirebaseApp, useUser } from "reactfire";
import { useHistory} from 'react-router-dom';
import Boards from '../components/Board';
import Login from './Login';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import EYlogo from '../imagenes/eylogo.svg'
 //____________________//
 import On from '../imagenes/On.svg'
 import GON from '../imagenes/GON.svg'
 import Logout from '../imagenes/Logout.svg'
 import MiniSidebar from '../components/minisidebar'

 import Cards from '../components/cards'
import Grid from '../components/grid'
import Paper from '@material-ui/core/Paper';
import Tab from '../components/disabletab'

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Avatar from "../components/avatar";

import MenuLateral from '../components/menu'
import Contenido from '../components/contenidodash'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


 const drawerWidth = 50;

 const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
 
export default function ClippedDrawer() {
   const classes = useStyles();
   const user = useUser();
   const history = useHistory();
   const firebase = useFirebaseApp();

   const logout = async ()=>{
     await firebase.auth().signOut();
     history.push('/');
   }
  return (
    
    <div>
      {
      user &&
    <div className={classes.root}>
       <CssBaseline />
       <AppBar position="fixed" className={classes.appBar} style={{ background: '#FFFFFF' }}>
       <Toolbar>
 
    <img src={EYlogo} alt='eylogo' width='50' style={{ padding: '10px 0 10px 0', marginLeft: '20px' }}/>
    <Avatar></Avatar>

   <div className={classes.grow} />
   <div  width='50' style={{ color: '#2E2E38'}} > <Typography color="inherit" variant='subtitle1' style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', marginTop:'10px'}}>
   {user.displayName}</Typography></div>
   <div className={classes.sectionDesktop}>

     <IconButton aria-label="show 4 new mails" style={{ color: '#000000'}} style={{ padding: '10px 0 10px 0', marginLeft: '600px' }}>
     
      <img src={On} alt='eylogo' width='25' style={{ padding: '10px 0 10px 0', marginLeft: '10px' }}/>
     </IconButton>
     <IconButton aria-label="show 17 new notifications" style={{ color: '#000000'}}>
     <img src={GON} alt='eylogo' width='25' style={{ padding: '10px 0 10px 0', marginLeft: '10px' }}/>

     </IconButton>
     <IconButton aria-label="show 17 new notifications" style={{ color: '#000000'}}>
     <img src={Logout} alt='eylogo' width='25' onClick={logout} style={{ padding: '10px 0 10px 0', marginLeft: '10px' }}/>
     </IconButton>
   </div>
    </Toolbar>
       </AppBar>
       <Drawer
         className={classes.drawer}
         variant="permanent"
         classes={{
           paper: classes.drawerPaper,
         }}
       >
         <Toolbar />
         
        <div className={classes.drawerContainer}>
          <MenuLateral/>
        </div>
       </Drawer>

         <Toolbar />
         <main className={classes.content}>
        <div className={classes.toolbar} />       
        <Contenido />
        <Boards/>
        {/* <Grid></Grid> */}
        {/* <Cards /> */}
      </main>
       <MiniSidebar />
       
     </div>
      }
      {
        !user &&
        
        <Login />
                 
      }
     </div>
  );
}
