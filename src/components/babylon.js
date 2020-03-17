import React from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export default class BabylonScene extends React.Component {
    constructor(props){
        super(props);
        this.scene = null;
        this.engine = null;
        this.canvas = null;
    }

    onResizeWindow = () => {
        if (this.engine) {
            this.engine.resize();
        }
    }
    
    componentDidMount () {
        this.engine = new BABYLON.Engine(
            this.canvas,
            true,
            this.props.engineOptions,
            this.props.adaptToDeviceRatio
        );

        let scene = new BABYLON.Scene(this.engine);
        this.scene = scene;

        if (typeof this.props.onSceneMount === 'function') {
            this.props.onSceneMount({
            scene,
            engine: this.engine,
            canvas: this.canvas
            });
        } else {
            console.error('onSceneMount function not available');
        }

        window.addEventListener('resize', this.onResizeWindow);
        }

        componentWillUnmount () {
            window.removeEventListener('resize', this.onResizeWindow);
        }

        onCanvasLoaded = (c) => {
        if (c !== null) {
            this.canvas = c;
        }
    }
    

    render(){
        let { width, height, ...rest } = this.props;

        let opts = {};

        if (width !== undefined && height !== undefined) {
            opts.width = width;
            opts.height = height;
        }

        
        return(
            <canvas
                {...opts}
                ref={this.onCanvasLoaded}
            />
        );
    }
}