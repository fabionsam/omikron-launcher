import styledComponent from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

export const TitleBarDiv = styledComponent.div`
  display:block;
  position:fixed;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: transparent;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  z-index: 999;
  top:0;
  left:0;
  width:100%;
  height: 40px;
`;

export const ButtonCloseDiv = styledComponent.div`
    -webkit-app-region: no-drag;
    width: 50px;
    height: 40px;
    background-color: transparent;
    &:hover {
        background-color: rgb(209, 54, 57);    
        cursor: pointer;     
    }
    &:active {
        background-color: rgb(133, 34, 36); 
    }
    justify-content: center;
    display: flex;
`;

export const ButtonMinimizeDiv = styledComponent.div`
    -webkit-app-region: no-drag;
    width: 50px;
    height: 40px;
    background-color: transparent;
    &:hover {
        background-color: rgb(192, 192, 192, 0.5);   
        cursor: pointer;   
    }
    &:active {
        background-color: rgb(192, 192, 192, 0.8);   
    }
    justify-content: center;
    display: flex;
`;

export const VerticalCenterGrid = styled(Grid)({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    opacity: "100% !important"
});