// import logo from './logo.svg';
import './App.css';

// import Function_Props from './Lab2/Function_Props';
// import Class_Props from './Lab2/Class_Props';
// import Login_Component from './Lab2/Login_Component';
// import Plus_Minus from './Lab2/Plus_Minus';

import Products from "./Lab3/Products"
import SignUp from "./Lab3/SignUp"
import Login from './Lab3/Login';

function App() {
  return (
    <div className="App">

      {/* <h1>Lab 2</h1>
      <br></br>
      <Function_Props name='Hamza' age={27} job='Engineer' male={true} />
      <Class_Props course1="SQL" course2="Linux" />
      <br></br>
      <Login_Component id="login" className="btn"/>
      <br></br>
      <Plus_Minus/>
      <br></br>
      <br></br> */}

      <h1>Lab 3</h1>
      <br></br>
      <Products/>

      <br></br>

      <SignUp/>

      <Login/>

      

    </div>
  );
}

export default App;
