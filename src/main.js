var React = require('react');
var ReactDOM = require('react-dom');
var ReactPerf = require('react-addons-perf');

window.ReactPerf = ReactPerf;

var Elem = React.createClass({
  displayName: 'Elem',

  render: function () {
    return (
      <div>{'App'}</div>
    );
  },

});

var App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div><Elem /></div>
    );
  },

});

ReactPerf.start()
ReactDOM.render(<App />, document.getElementById('app'));
ReactPerf.stop()

ReactPerf.printInclusive();