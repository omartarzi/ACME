
import React from 'react';
import Information from './information.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null,
      complete: false
    }
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete() {
    this.setState({
      complete: !this.state.complete
    });
  }

  searchSpace(event) {
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render() {
    const styleInfo = {
      paddingRight:'5em'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10em',
      position:'relative',
      left:'10em',
      height:'3em',
      width:'20em',
      marginTop:'5em',
      marginBottom:'10em'
    }

    const incompleteIcon = <span className="far fa-star todo-item-icon"></span>;
    const completeIcon = <span className="fas fa-star todo-item-icon"></span>;

    const items = Information.filter((data)=>{
      if(this.state.search == null) {
          return data
      } else if(data.firstName.trim().toLowerCase().includes(this.state.search.trim().toLowerCase()) || data.lastName.trim().toLowerCase().includes(this.state.search.trim().toLowerCase())){
          return data
      }
    }).map((data, index)=>{
      return(
        <div className="message" key={index}>
            <ul style={{position:'relative'}}>
              <span style={styleInfo}>{`${data.firstName} ${data.lastName}`}</span>
                <div className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</div>
                <div className="star" onClick={this.toggleComplete}>
                  {this.state.complete ? completeIcon : incompleteIcon}
                {/* <span className="todo-item-text">{this.props.item}</span> */}
                </div>
            </ul>
        </div>
      )
    })

    return (
        <div>
          <input className="search-bar" type="text" placeholder="Search for a new chat" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
          {items}
        </div>
    )
  }
}