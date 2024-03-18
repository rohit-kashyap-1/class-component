import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {counter:1,name:''}
    }

    increment = () =>{
        let counter = this.state.counter
        counter++
        this.setState({counter:counter})
    }

    decrement =()=>{
        let counter = this.state.counter
        counter--
        this.setState({counter:counter})
    }

    handleChange = (event)=>{
        this.setState({name:event.target.value})   
    }

    componentDidMount(){
        //one time after the component load
        console.log('component loaded')
    }

    componentDidUpdate(){
        //every time a component changes, any change in state variables then it will run

        console.log('i am running')
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.increment}>Increment</button>
        </div>
        <hr />
        <input type='text' onChange={this.handleChange}  value={this.state.name}/>
      </div>
    )
  }
}
