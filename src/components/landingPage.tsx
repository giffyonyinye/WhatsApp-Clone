import React from "react";
import { makeStyles } from "@mui/styles";
import logo from '../assets/whatsapp-icon.svg';
import Typography from '@mui/material/Typography';


declare module '@mui/material' {
    interface Theme {
      palette: {
        primary: {
            main:string
        };
      };
    }
}
interface ThemeOptions {
    palette: {
        primary: {
            main:string
        };
      };
}

const useStyles = makeStyles((theme:ThemeOptions) => ({
     demo:{
        background:theme.palette.primary.main
     },
     primaryColor:{
        background:'whitesmoke',
        height: '100vh'
     },
     logo:{
         width:'30px'
     },
     header: {
         padding:'4rem',
         background:'green',
         color:'white',
         display: 'flex'
     }
}));
export const LandingPage = () : JSX.Element => {
    const classes = useStyles();
    return <div className={classes.primaryColor}>
        <div>
            <div className={classes.header}>
                <div>
                    <img className={classes.logo} src={logo}  alt="logo"/>
                </div>
                <Typography pl={2} pt={1}>
                    WhatsApp Web
                </Typography>
            </div>

            <div>
               
            </div>
        </div>
    </div>
}
