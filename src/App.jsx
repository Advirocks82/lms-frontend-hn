import './App.css';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/Auth/RequireAuth';
// import Home from './Components/Home'; // Make sure to import the Home component
// import HomeLayout from './Layouts/HomeLayout';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import CourseDescription from './Pages/Course/CourseDescription';
import NotFound from './Pages/NotFound';
import Denied from './Pages/Denied';
import Signup from './Pages/Signup';
import Profile from './Pages/User/Profile';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import CreateCourse from './Pages/Course/CreateCourse';
import EditProfile from './Pages/User/EditProfile';
import Checkout from './Pages/Payment/Checkout';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
           <Route path='/about' element={ < AboutUs /> }> </Route> 
           <Route path="/courses" element={<CourseList />} /> 
           <Route path="/contact" element={<Contact />} />
           <Route path="/denied" element={<Denied />} />
           <Route path="/course/description" element={<CourseDescription />} />
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
<Route path="/course/create" element={<CreateCourse />} />
</Route>
<Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
<Route path='/user/profile' element={<Profile />} /></Route>
<Route path='/user/editprofile' element={<EditProfile />} />  
<Route path='/checkout' element={<Checkout />} />
<Route path='/checkout/success' element={<CheckoutSuccess />} />
<Route path="*" element = {< NotFound />}></Route>
        </Routes>
      {/* <HomeLayout/> */}
    </>
  );
}

export default App;
