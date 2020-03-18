// import React from 'react';    //ES Modules (import,export)
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


/*
    CLASE 20 / 48 
    SMART AND DUMB

*/
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Dumb from "./components/dumb";
// import Smart from "./components/smart";

// function App() {
//   const friends = ['Hugo', 'Paco', 'Luis'];
//   const other_friends = ['Ramirito', 'Daniel' ]
  
//   return (
    
//     <div className="App">
//       <Smart friends={ friends }/>
//       <Smart friends={ other_friends } />
//       <Dumb/>
//     </div>
//   );
// }

// export default App;

/*
    CLASE 23 / 49
    component y props

    17-03-2020
*/
import React from 'react';
import './App.css';
import Dumb from "./components/dumb";
import Smart from "./components/smart";
import Welcome from "./components/props";
import ClassProps from "./components/class-props";
import FunctionProps from "./components/function-props";

function App() {
  const friends = ['Hugo', 'Paco', 'Luis'];
  const other_friends = ['Ramirito', 'Daniel' ]
  
  return (
    
    <div className="App">
      <ClassProps name="Eli" lastName="Centraal" age="28"/>
      <FunctionProps name="Eli" lastName="Ramos" age="29"/>
      <Welcome name="Eli"/>
      <Welcome name="Eli"/>
      <Smart friends={ friends }/>
      <Smart friends={ other_friends } />
      <Dumb/>
    </div>
  );
}

export default App;


