import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice';
import courseSliceReducer from './Slices/CourseSlice';
import razorpaySliceReducer from './Slices/RazorpaySlice';
import statSliceReducer from './Slices/StatSlice';
import lectureSliceReducer from './Slices/LectureSlice';

const store= configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay: razorpaySliceReducer,
        lecture: lectureSliceReducer,
        stat: statSliceReducer
    },
    devTools:true
});

export default store;