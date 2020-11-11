import React from 'react';
import Information from './information.js';

export default class Messages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: sampleData.firstName,
      lastName: sampleData.lastName,
      text: [],
      isFavorite: false,
      filterText: ''
    }
  }

    render() {
    return (
      <div>
        <div>Hello</div>
        <div>{this.state.firstName}</div>
          <div className="firstName">
            <ul>
              {sampleData.map((firstName, index) => {
                return (
                  <div key={index}>
                    {sampleData.firstName}
                  </div>
                )
              })}
            </ul>
          </div>
      </div>
    )
  }
}


            // {this.state.lines.map((line, index) => {
            //   //console.log(line.name)
            //   //filter station_name by name
            //   //console.log(line.id)
            //   return <LineElement line={line.name} key={index} index={index}/>;
            // })}


                      {/* <ul> */}
          {/* <div className="firstName">
            {this.state.names.map((name, index) => {
                return (
                  <div key={index}>
                    {sampleData.name}
                  </div>
                )
              })}
         </ul>
        </div> */}