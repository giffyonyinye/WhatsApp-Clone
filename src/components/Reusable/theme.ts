import { createTheme } from '@mui/material/styles';

const wine = '#830053'
const theme = createTheme({

    palette: {
      primary: {
        main: wine,
      }
    }
    //   secondary: {
    //       main : '#fff'
    //   },
    //   background:{
    //     paper:wine
    //   }
    // },
    // zIndex:{
    //   appBar:2000
    // },
    
    // typography: {
    //     h4: {
    //         margin:'0px'
    //     },
    //     button: {
    //         textTransform: "none",
    //         color:wine
    //       }
    // },
});

export default theme;