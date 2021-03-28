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


    switchNameHandler=(newName)=>{
        this.setState({

            person:[
                {name:newName, age:24},
                {name:"Md Sumon Shaikh", age:22},
                {name:"Shaikh Sujon", age:34}
            ]
        })
    }



 render() {
     return(
         <div className={'App'}>
             <h1>Hi, I`m a React App</h1>
             <p>This is really Working!</p>
             <button onClick={this.switchNameHandler}>Click me</button>
             <Person
                 name={this.state.person[0].name}
                 age={ this.state.person[0].age} />
             <Person
                 name={this.state.person[1].name}
                 age={this.state.person[1].age} />
             <Person
                 name={this.state.person[2].name}
                 age={this.state.person[2].age} />


             <Person
                 click={this.switchNameHandler.bind(this,'Maximilan')}>My Hobby reaching</Person>
         </div>
     )
 }


    }


export default App;

