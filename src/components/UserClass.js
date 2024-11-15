import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child component Did Mount");
    const data = await fetch("https://api.github.com/users/Saurabh1590");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;
    const { count } = this.state;

    //console.log("Child Render")
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @saurabh4905 </h4>
      </div>
    );
  }
}

export default UserClass;
