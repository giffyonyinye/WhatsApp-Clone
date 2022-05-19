import React from "react";
import QRCode from '../../assets/whatsapp-qrcode.png';

import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from "@mui/styles";



interface ThemeOptions {
    palette: {
        primary: {
            main:string
        };
      };
}

const useStyles = makeStyles((theme:ThemeOptions) => ({
    main : {
        background: "white",
        padding: "4rem",
        width: "60%"
    },

    subMain : {
        display: "flex",
    },

}));

export const QRCodeLayout = () : JSX.Element => {
    const classes = useStyles();
    return <div className={classes.main}>
        <div className={classes.subMain}>
            <div >
                <Typography>
                    To use WhatsApp on your computer:
                </Typography>
                
                <List sx={{marginTop:"2rem"}}>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap Menu 
                        <i className="fa fa-square-ellipsis-vertical"></i> 
                        &nbsp; or &nbsp; <span> Settings &nbsp;</span> and select Linked Devices
                    </ListItem>
                    <ListItem>3. Open WhatsApp on your phone</ListItem>
                </List>
            </div>

            <div>
                <img width={350} src={QRCode} alt="qrcode" />
                <div style={{display:"flex"}}>
                    <input style={{marginTop:".2rem"}} type="checkbox" name="check" id="check" />
                    <Typography sx={{fontSize:".8rem", marginLeft:".4rem"}}>Keep me signed in</Typography>
                </div>
            </div>
        </div>

        <Typography sx={{}}>
            <a style={{color:"#01bea5", textDecoration:"none"}} href="#">Need help to get Started?</a>
        </Typography>
    </div>
}