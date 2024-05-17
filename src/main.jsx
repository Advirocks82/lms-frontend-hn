import ReactDOM from 'react-dom/client'
// Component imports
import App from './App.jsx';
// css imports
import './index.css'
// library import
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = { store }>
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider >
);
 