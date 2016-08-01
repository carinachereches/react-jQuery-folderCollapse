import React, {Component} from 'react';
// <button className="button"onClick={this.props.btn}><img className="imgButton" src = "./p.png"/></button>

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {view: true};
    }

    btn(){
        if(this.state.view == true){
            console.log("make view false");
            this.setState({view: false})
        }
        else {
            console.log("make view true");
            this.setState({view: true})
        }

    }


    handleOnClick() {
        this.props.onFileClick && this.props.onFileClick(this.props.name);
    }

    render() {
        if (this.state.view == true) {
            return (
                <li className='folder-item'>
                    <button className="button" onClick={this.btn.bind(this)}><img className="imgButton" src="./p.png"/>
                    </button>
                    <span onClick={this.handleOnClick.bind(this)}>{this.props.name}</span>
                </li>
            );
        }

    else {
            return (
                <li className='folder-item hiddenFolder '>
                    <button className="button" onClick={this.btn.bind(this)}><img className="imgButton" src="./p2.png"/>
                    </button>
                    <span onClick={this.handleOnClick.bind(this)}>{this.props.name}</span>
                </li>

        );

        }



}
}

export default Folder;