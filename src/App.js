import  { Header } from "./Header";
import  { Content } from "./Content";
import React, { Component } from 'react';
class App extends Component{
   render(){
      return(
        //  <div>
        //      <Header/>
        //      <Content/>
        //     <h1>Hello World</h1>
        //  </div>
        <div class="grid-container">
            <div class="grid-item item1">1</div>
            <div class="grid-item item2">2</div>
            <div class="grid-item item3">3</div>  
            <div class="grid-item item4">4</div>
            <div class="grid-item item5">5</div>
            <div class="grid-item item3">6</div>  
        </div>
      );
   }
}

export default App;