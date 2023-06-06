// import logo from './logo.svg';
import './App.css';


import FunctionProps from './Lab2/FunctionProps';
import ClassProps from './Lab2/ClassProps';
import LoginComponent from './Lab2/LoginComponent';
import PlusMinus from './Lab2/PlusMinus';

import Products from "./Lab3/Products"
import SignUp from "./Lab3/SignUp"
import Component1 from './Lab3/nested components/Component1';
import { UserProvider } from './Lab3/nested components/UserContext';

import PostsGet from './Lab3/PostsGet';
import PostSend from './Lab3/PostSend';

import ProductsHooks from './Lab4/ProductsHooks';
import SignUpHooks from './Lab4/SignUpHooks';
import PostsGetHooks from './Lab4/PostsGetHooks';
import PostSendHooks from './Lab4/PostSendHooks';
import Component1Hooks from './Lab4/nested components/Component1Hooks';
import { UserProviderHooks } from './Lab4/nested components/UserContextHooks';

function App() {
  return (
    <div className="App">

      <h1>Lab 2</h1>
      <br></br>
      <FunctionProps name='Hamza' age={27} job='Engineer' male={true} />
      <ClassProps course1="SQL" course2="Linux" />
      <br></br>
      <LoginComponent id="login" className="btn"/>
      <br></br>
      <PlusMinus/>
      <br></br>
      <br></br>

      <h1>Lab 3</h1>
      <br></br>
      <Products/>

      <br></br> 
      
      <SignUp/>

      <br></br> 
      <br></br> 
      <UserProvider value="Comp1 Value">
          <Component1/> 
      </UserProvider>
      <br></br>

      <PostsGet/>
      
      <br/>
      <PostSend/>

    

    <br/>
    <h1>Lab 4</h1>
    <br></br>
    <ProductsHooks/>

    <br></br> 

    <SignUpHooks/>

    <br></br> 
    <br></br> 
    <UserProviderHooks value="Comp1Hooks Value">
        <Component1Hooks/> 
    </UserProviderHooks>
    <br></br>

    <PostsGetHooks/>

    <br/>
    <PostSendHooks/>

  </div>
  );
}

export default App;
