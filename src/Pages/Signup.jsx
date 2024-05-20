import { useState } from 'react'; // Importing useState hook from React for state management
import { toast } from 'react-hot-toast'; // Importing toast for showing notifications
import { BsPersonCircle } from 'react-icons/bs'; // Importing an icon from react-icons
import { useDispatch } from 'react-redux'; // Importing useDispatch hook for dispatching Redux actions
import { Link, useNavigate } from 'react-router-dom'; // Importing Link for navigation and useNavigate for programmatic navigation
import HomeLayout from '../Layouts/HomeLayout'; // Importing the layout component
import { createAccount } from '../Redux/Slices/AuthSlice'; // Importing the createAccount action from AuthSlice
import { isEmail, isValidPassword } from '../Helpers/regexMatcher';

function Signup() {

    const dispatch = useDispatch(); // Using useDispatch hook to dispatch actions
    const navigate = useNavigate(); // Using useNavigate hook for navigation

    // State to manage the preview image
    const [previewImage, setPreviewImage] = useState("");

    // State to manage the signup form data
    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: ""
    });

    // Function to handle user input changes
    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        });
    }

    // Function to handle image upload
    function getImage(event) {
        event.preventDefault();
        // Getting the uploaded image file
        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader(); // Creating a FileReader to read the image file
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result); // Setting the preview image state
            });
        }
    }

    // Function to handle form submission and account creation
    async function createNewAccount(event) {
        event.preventDefault();
        // Validating form fields
        if (!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar) {
            toast.error("Please fill all the details"); // Showing error toast if any field is missing
            return;
        }

        // Checking the name field length
        if (signupData.fullName.length < 5) {
            toast.error("Name should be at least of 5 characters"); // Showing error toast if name is too short
            return;
        }
        // Checking for valid email
        if(!isEmail(signupData.email)) {
            toast.error("Invalid email id"); // Showing error toast if email is invalid
            return;
        }
        // Checking password validation
        if(!isValidPassword(signupData.password)) {
            toast.error("Password should be 6 - 16 character long with at least a number and special character"); // Showing error toast if password is invalid
            return;
        }
        const formData = new FormData(); // Creating a FormData object to send the form data
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);
        formData.append("avatar", signupData.avatar);

        // Dispatching create account action
        const response = await dispatch(createAccount(formData));
        if (response?.payload?.success) navigate("/"); // Navigating to home page on successful account creation

        // Resetting the signup form data and preview image
        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: ""
        });
        setPreviewImage("");
    }

    return (
        <HomeLayout>
            <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
                <form noValidate onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} /> // Showing preview image if available
                        ) : (
                            <BsPersonCircle className='w-24 h-24 rounded-full m-auto' /> // Showing default icon if no preview image
                        )}
                    </label>
                    <input
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="fullName" className='font-semibold'> Name </label>
                        <input
                            type="text"
                            required
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.fullName}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'> Email </label>
                        <input
                            type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.email}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-semibold'> Password </label>
                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.password}
                        />
                    </div>

                    <button type="submit" className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
                        Create account
                    </button>

                    <p className="text-center">
                        Already have an account? <Link to="/login" className='link text-accent cursor-pointer'> Login</Link> 
                    </p>

                </form>
            </div>
        </HomeLayout>
    );
}

export default Signup;
