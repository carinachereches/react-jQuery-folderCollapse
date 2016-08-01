import React, {Component} from 'React'

class HiddenFolder extends Component {
    handleOnClick() {
        this.props.onFileClick && this.props.onFileClick(this.props.name);
    }

    render() {
        return (
            <li className='folder-item'><button className="button" onClick={this.props.btn}><img className="imgButton" src = "./p2.png"/></button>
                <span >{this.props.name}</span>
            </li>
        );
    }
}

export default HiddenFolder;