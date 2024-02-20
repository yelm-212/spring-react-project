import logo from './logo.svg';
import React from "react";
import './App.css';
import LearningComponent from './components/examples/LeaningComponent';


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
      <LearningComponent/> 
    </div>
  );
}




export default App;
