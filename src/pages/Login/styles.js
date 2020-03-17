import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

export const GridRoot = styled(Grid)({
    flexGrow: 1,
    backgroundColor: green[500],
    width: "100%",
    height: "100%",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
});

export const PaperLoginForm = styled(Paper)({
    height: 400,
    width: 400,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
});

export const VerticalCenterGrid = styled(Grid)({
    width: "75%",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
});

export const TextLogin = styled(TextField)({
    height: 70,
    width: "100%"
});