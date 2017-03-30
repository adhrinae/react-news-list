import React, { Component } from 'react';

class SourceSelection extends Component {
  constructor(props) {
    super(props);
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.state = {
      sources: []
    }
  }

  handleSourceChange(e) {
    this.props.onSourceChange(e.target.value);
  }

  componentWillMount() {
    fetch('https://newsapi.org/v1/sources?language=en')
      .then(response => response.json())
      .then(json => {
        this.setState({ sources: json.sources });
      });
  }

  renderOptions() {
    return this.state.sources.map((source, index) => {
      return (
        <option key={index} value={source.id}>
          {source.name}
        </option>
      );
    });
  }
  
  render() {
    const options = this.renderOptions();
    
    return (
      <div className="source-selection">
        <div className="box">
          <h2 className="title is-2">
            <span className="icon is-large"><i className="fa fa-newspaper-o"></i></span>
            News List
          </h2>

          <h4 className="title is-4">Select News Source</h4>

          <p className="control">
            <span className="select is-medium">
              <select onChange={this.handleSourceChange}>
                <option value="">Please Select news source</option>
                {options}
              </select>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default SourceSelection;