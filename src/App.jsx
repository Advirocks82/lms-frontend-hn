import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './Components/Home'; // Make sure to import the Home component
// import HomeLayout from './Layouts/HomeLayout';
import HomePage from './Pages/HomePage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      {/* <HomeLayout/> */}
    </>
  );
}

export default App;
