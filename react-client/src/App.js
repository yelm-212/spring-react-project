// import logo from './logo.svg';
import React from "react";
import './App.css';
// import LearningComponent from './components/examples/LearningComponent';
import TodoApp from './components/todo/TodoApp';


function App() {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/test")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then(function (result) {
  //           setData(result);
  //     })
  // },[]);


  return (
    <div className="App">
      {/* <LearningComponent/>  */}
      <TodoApp/>
    </div>
  );
}




export default App;
