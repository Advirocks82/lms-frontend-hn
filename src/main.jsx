import ReactDOM from 'react-dom/client'
// Component imports
import App from './App.jsx';
// css imports
import './index.css'
// library import
import {BrowserRouter} from 'react-rounter-dom'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
);
