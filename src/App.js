import React from 'react';
import Routes from './routes.js';
import TitleBar from './pages/TitleBar';

export default class App extends React.Component {
  render(){ 
    return(
      <div className="App" style={{height: "100%", width: "100%"}}>    
        <div style={{height: "100%"}}>
          <TitleBar />
          <Routes />
        </div>
      </div>
    );
  }
}