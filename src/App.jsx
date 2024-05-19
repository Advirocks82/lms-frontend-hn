import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './Components/Home'; // Make sure to import the Home component
// import HomeLayout from './Layouts/HomeLayout';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={ < AboutUs /> }> </Route>
          <Route path="*" element = {< NotFound />}></Route>
        </Routes>
      {/* <HomeLayout/> */}
    </>
  );
}

export default App;
