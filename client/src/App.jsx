import React from 'react';
// import Messages from './Messages.jsx';
import Information from './information.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null,
    }
  }

  // filterUpdate(value) {
  //   this.setState = ({
  //     search: value
  //   })
  // }

  searchSpace(event) {
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render() {
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }

    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || data.lastName.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map((data, index)=>{
      return(
      <div key={index}>
          <ul style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.firstName}</span>
            <span style={styleInfo}>{data.lastName}</span>
          </ul>
      </div>
      )
    })

    return (
      <div>

        <div>
          <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
          {items}
        </div>

        {/* <div>
          <Messages />
        </div> */}
      </div>
    )
  }
}