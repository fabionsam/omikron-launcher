import React, { useRef, useState, Suspense, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GridRoot, PaperLoginForm, TextLogin, VerticalCenterGrid } from './styles';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import animationData from './lottie.json';
import BabylonScene from '../../components/babylon';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

class Login extends React.Component{
    onSceneMount(e){
        const { canvas, scene, engine } = e;
        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
        var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5,-10), scene);

        // Target the camera to scene origin.
        camera.setTarget(BABYLON.Vector3.Zero());

        // Attach the camera to the canvas.
        camera.attachControl(canvas, false);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
        
        // Append glTF model to scene.
        BABYLON.SceneLoader.Append("./", "FA1g-Flamingo.glb", scene, function (scene) { 
            // Create a default arc rotate camera and light.
            scene.createDefaultCameraOrLight(true, true, true);

            // The default camera looks at the back of the asset.
            // Rotate the camera by 180 degrees to the front of the asset.
            scene.activeCamera.alpha += Math.PI;
        });

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    }

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        
        return(
            <GridRoot>
                <Grid container justify="center" style={{width: "100%", height: "100%"}}>
                    <PaperLoginForm justify="center">
                        <Grid container justify="center" style={{height: "100%"}}> 
                            {/* <VerticalCenterGrid>
                                 <Lottie 
                                    options={defaultOptions}
                                    height={100}
                                    width={100}
                                />
                                <TextLogin id="outlined-basic" label="Usuário" />
                                <TextLogin id="outlined-basic" label="Senha" type="password"/>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Manter login"
                                />
                                <Grid container justify="center" style={{marginTop: 20}}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{width: "70%"}}
                                    >
                                        Logar
                                    </Button>
                                </Grid>
                            </VerticalCenterGrid> */}
                            <BabylonScene onSceneMount={this.onSceneMount}>

                            </BabylonScene>
                        </Grid>
                    </PaperLoginForm>
                </Grid>
            </GridRoot>
        );
    }
}

export default Login;