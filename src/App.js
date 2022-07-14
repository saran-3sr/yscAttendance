import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import './App.css';
import { formHelperTextClasses } from '@mui/material';
import NavbarBoot from './component/Navbar';
import Homepage from './pages/Homepage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
        <Route path='/' exact element={<Homepage/>}/>
       </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
