import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    // typography:{
    //     fontFamily:[

    //     ]
    // },
    palette: {
        primary: {
            main: '#121212',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

export default darkTheme;
