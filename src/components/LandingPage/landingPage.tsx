import React from "react";
import { QRCodeLayout } from './QRCodeLayout';
import { makeStyles } from "@mui/styles";
import logo from '../../assets/whatsapp-icon.svg';
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
        height: '100vh',
        position: 'relative'
     },
     logo:{
         width:'30px'
     },
     header: {
         height:'10rem',
         background:'#01bea5',
         color:'white',
         display: 'flex'
     },
     whatsapp: {
        margin: "2rem 8rem",
        display: 'flex',
     },
     qrcode: {
         position: 'absolute',
         top: "5rem",
         left:"13rem",
         width:"100%",
     }
}));
export const LandingPage = () : JSX.Element => {
    const classes = useStyles();
    return <div className={classes.primaryColor}>
        <div>
            <div className={classes.header}>
                <div className={classes.whatsapp}>
                    <div>
                        <img className={classes.logo} src={logo}  alt="logo"/>
                    </div>
                    <Typography sx={{margin:".4rem 1rem", fontSize:".8rem"}} >
                        WHATSAPP WEB
                    </Typography>
                </div>
            </div>

            <div className={classes.qrcode}>
               <QRCodeLayout/>
            </div>
        </div>
    </div>
}
