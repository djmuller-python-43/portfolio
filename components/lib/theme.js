import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(207, 204, 204)',
      },
      secondary: {
        main: '#2979ff',
        dark: '#1c54b2',
        light: '#5393ff'
      }
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        laptop: 1024,
        desktop: 1200
      }
    }
  })


export default theme