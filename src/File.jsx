import React, {Component} from 'react';

// <p  className='file-item'>
//     <div onClick={this.handleOnClick.bind(this)}>{this.props.name}</div>
// </p>


class File extends Component {
    handleOnClick() {
        this.props.onFileClick && this.props.onFileClick(this.props.name);
    }
    render() {
        return (
            <li className='file-item'>
                <div onClick={this.handleOnClick.bind(this)}>{this.props.name}</div>
            </li>

        );
    }
}

export default File;