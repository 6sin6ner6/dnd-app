import React, { Component } from "react";
import Raport from "./Raport";

class Sessions extends Component {
  state = {
    raports: [],
    raport: ""
  };
  componentDidMount = () => {
    fetch("/api/raports")
      .then(response => response.json())
      .then(data => this.setState({ raports: data.reverse() }));
  };
  handleClick = id => {
    let raport = this.state.raports.filter(el => el._id === id);
    this.setState({
      raport: raport[0].content
    });
  };
  closeRaport = () => {
    this.setState({
      raport: ""
    });
  };

  render() {
    return (
      <>
        <div>
          <p className="main-view__raport">Amren: raporty</p>
          {this.state.raport ? (
            <div className="popup-content">
              <Raport content={this.state.raport} />
              <button className="raport-btn" onClick={this.closeRaport}>
                Zwiń X
              </button>
            </div>
          ) : null}
          {this.state.raports.map(raport => (
            <div className="raport" key={raport._id}>
              <h3
                className="raport-title"
                onClick={() => this.handleClick(raport._id)}
              >
                {raport.title}
              </h3>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Sessions;
