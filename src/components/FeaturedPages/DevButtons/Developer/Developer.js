import React, {Component} from 'react'

export default class Developer extends Component {

    constructor(props){
        super(props);
        this.state={
            hasChanged: false
        }
    }

    handle_selected = (e) => {
        e.preventDefault()
        this.setState({hasChanged: true})
        console.log(this.props.name)
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.selected}</h3>
                <button onClick={this.handle_selected}>select</button>
                {this.state.hasChanged && (<span>Updated</span>)}
               
            </div>
        )
    }
}


