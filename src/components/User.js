import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);

  useEffect(()=> {
    //
  }, [])

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Renukooot</h3>
      <h4>Contact: @saurabh7</h4>
    </div>
  );
};

export default User;
