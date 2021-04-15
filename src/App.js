import React,{Component} from 'react'
import './App.css'
import Person from '../src/components/Person'

class App extends Component{
    state = {
        person:[
            {name:'Max', age:28},
            {name:"Manu", age:29},
            {name:"Stephanie", age:26}
        ],
        otherState:'someOther value'

    }


    switchNameHandler=( event)=>{
        this.setState({

            person:[
                {name:"Hazrot", age:24},
                {name:"Md Sumon Shaikh", age:22},
                {name:event.target.value, age:34}
            ]
        })
    }



 render() {
     return(
         <div className={'App'}>
             <h1>Hi, I am a React App</h1>
             <p>This is really Working!</p>
             <button onClick={this.switchNameHandler}>Click me</button>
          
         </div>
     )
 }


    }


export default App;

