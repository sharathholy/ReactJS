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
            <div class="grid-item item1">signal 1</div>
            <div class="grid-item item2">signal 2</div>
            <div class="grid-item item3"></div>  
            <div class="grid-item item4">refresh</div>
            <div class="grid-item item5">adminstrator</div>
            <div class="grid-item item6">settings</div>  
            <div class="grid-item item7">logout</div>  
            <div class="grid-item item8">left input content</div>  
            <div class="grid-item item9">Main input content</div>  
        </div>
      );
   }
}

export default App;