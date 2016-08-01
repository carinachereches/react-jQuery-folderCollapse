import React, {Component} from 'react';

import File from './File.jsx';
import Folder from './Folder.jsx';

import $ from 'jquery';

class FolderContainer extends Component {


    render() {
        const items = this.props.data;
        var result = [];
        let index = 0;

            for (let i = 0; i < items.length; i++) {
                if (items[i].type === 'dir') {
                       result.push(< Folder name={items[i].name} key={index++}
                                            onFileClick={this.props.onFileClick}
                       />);
                   }
                  else result.push(<File name={items[i].name} key={index++}  onFileClick={this.props.onFileClick}/>);
                if (items[i].children) {
                    
                    result.push(<FolderContainer onFileClick={this.props.onFileClick} key={index++}
                                                 data={items[i].children} btn={this.props.btn}/>);
                }
            }


            return (

                <ul className="folder-container">
                    {result}
                </ul>
            );


    }
}

// function handleChange(event) {
//   this.setState({typed: event.target.value});
//   console.log("aa")
// }


var Input = React.createClass({
    render() {
        return (
            <input placeholder="filter..." onChange={this.props.handleChange} />
        );
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {data: []};

    }

    filter = (data, value)=> {
        let newObj = [];
        (function filterJSON(obj, searchValue) {
            if (obj.name && (obj.name.indexOf(searchValue) > -1)) {
                newObj.push(obj);
                return
            }
            for (var key in obj) {
                if (typeof obj[key] == "object" && obj[key] !== null) {
                    filterJSON(obj[key], searchValue);
                }
            }
        })(data, value);
        return newObj;
    };

    handleInput = (event) => {

        this.setState({typed: event.target.value});
        this.setState({data: this.filter(this.state.data, event.target.value)});
    };


    componentDidMount() {

         $.ajax({
             url: 'http://localhost:3000/src/j.json',
             dataType: 'json',
             cache: false,
             success: function (data) {
                 this.setState({data: data.data});
                 console.log(this.state.data[0].name);
             }.bind(this),
             error: function (xhr, status, err) {
                 console.log("error");
             }
         });
     }




    render() {
        return (

                <div className="widget">
                    <Input handleChange={this.handleInput} />
                    <div>{this.state.typed ? ("Searching for:" + this.state.typed) : null}</div>
                    <FolderContainer data={this.state.data} onFileClick={this.props.onFileClick}/>
                </div>
            );


    }





}

export default App;
