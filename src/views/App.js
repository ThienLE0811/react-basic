import logo from './logo.svg';
import  './App.scss';
import MyComponent from './example/MyComponent';


/*
  2 loai component: class component and function component

*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome ReactApp of Thien Le
        </p>
        {/* <MyComponent/> short cut*/}
        <MyComponent></MyComponent> 
      </header>
    </div>
  );
}

export default App;
