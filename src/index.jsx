import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: 'Default Data'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('BUTTON CLICKED')
        
        const SERVER_URL = "https://5000-e75ecd90-54cc-46e0-86c6-2bb579cc2438.ws-us02.gitpod.io"

        console.log(SERVER_URL + '/api')
        axios
            .get(SERVER_URL + '/api')
            .then((res) => {
                // console.log(res) 
                this.setState({
                    response: res.data
                })
            })

class App extends React.Component {
    constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('this is working!!')
    }

    render() {
        return ( 
          
            <div align="center" >
                <button className='getbutton' onClick={this.handleClick}>Get</button>
                <button className='postbutton' onClick={this.handleClick}>Post</button>
                <button className='patchbutton' onClick={this.handleClick}>Patch</button>
                <button className='deletebutton' onClick={this.handleClick}>Delete</button>
            </div>
         );
         <div>
                Bitly Public API Explorer
                <p> { 
                    typeof this.state.response === 'string' ? 
                    this.state.response : 
                    JSON.stringify(this.state.response)
                    }
                 </p>
                <button onClick={this.handleClick}>SUBMIT!</button>
            </div> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

