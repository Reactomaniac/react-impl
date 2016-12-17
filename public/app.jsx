var Greeter = React.createClass({
  getDefaultProps : function() {
    return {
      name: "React@!",
      msg: "hey whats up"
    };
  },
  onButtonClick : function(e) {
    e.preventDefault();

    var name = this.refs.name.value
    console.log(name)
  },
  render : function() {
    var name = this.props.name;
    var msg = this.props.msg;

    return (
      <div>
        <h1> hello {name}! </h1>
        <p> {msg} </p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
