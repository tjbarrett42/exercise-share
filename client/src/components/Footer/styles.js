import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footerBox: {
        paddingTop: '20px',
        color: 'rgb(255,255,255)'
    },

    clickableIcon: {
        color: 'rgb(255,255,255)',
        '&:hover': {
        color: 'rgb(144,146,221)',
        },
      },
}));