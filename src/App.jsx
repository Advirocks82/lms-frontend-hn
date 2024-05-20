import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './Components/Home'; // Make sure to import the Home component
// import HomeLayout from './Layouts/HomeLayout';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
           <Route path='/about' element={ < AboutUs /> }> </Route> 
           <Route path="/courses" element={<CourseList />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element = {< NotFound />}></Route>
        </Routes>
      {/* <HomeLayout/> */}
    </>
  );
}

export default App;
