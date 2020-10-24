import React from 'react';

class Fetch extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://wger.de/api/v2/exercise/?format=json';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default Fetch;
