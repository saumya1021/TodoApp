import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit= (e) =>{
        e.preventDefault()
        this.props.addTodo(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Add TODO</label>
                    <input type='text'  onChange={(e)=>{this.handleChange(e)}}/>
                </form>
            </div>
        )
    }
}

export default AddTodo