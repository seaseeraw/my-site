// const About = () =>{
// return(
//    <div className="about">
//     <span>Hello</span>
//     <button onClick="">CAN YOU TRY</button>

//    </div>
// );
// }
// export default About;

import React from 'react';

function Button(props) {
  return <button onClick={props.onClick}>Click Me!</button>;
}

export default Button;