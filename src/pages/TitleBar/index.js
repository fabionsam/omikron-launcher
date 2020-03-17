import React from 'react';
import { TitleBarDiv, ButtonCloseDiv, VerticalCenterGrid, ButtonMinimizeDiv } from './styles';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
const { ipcRenderer } = window.require('electron');

class TitleBar extends React.Component{
    componentDidMount(){
    }

    closeWindow(){
        ipcRenderer.send('close-me');
    }

    minimizeWindow(){
        ipcRenderer.send('minimize-me');
    }

    render(){
        return(
            <TitleBarDiv>
                <Grid container justify="flex-end">
                    <ButtonMinimizeDiv container justify="center" onClick={() => { this.minimizeWindow(); }}>
                        <VerticalCenterGrid>
                            <MinimizeIcon fontSize="small" style={{ color: "white" }}/>
                        </VerticalCenterGrid>
                    </ButtonMinimizeDiv>
                    <ButtonCloseDiv container justify="center" onClick={() => { this.closeWindow(); }}>
                        <VerticalCenterGrid>
                            <CloseIcon fontSize="small" style={{ color: "white", marginTop: 5 }}/>
                        </VerticalCenterGrid>
                    </ButtonCloseDiv>
                </Grid>
            </TitleBarDiv>
        );
    }
}

export default TitleBar;