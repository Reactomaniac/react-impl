var Greeter = React.createClass({
  getDefaultProps : function() {
    return {
      name: "React@!",
      msg: "hey whats up"
    };
  },
  render : function() {
    var name = this.props.name;
    var msg = this.props.msg;
    return (
      <div>
        <h1> hello {name}! </h1>
        <p> {msg} </p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
  );