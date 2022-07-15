import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import './App.css';
import { formHelperTextClasses } from '@mui/material';
import NavbarBoot from './component/Navbar';
import Homepage from './pages/Homepage';
import Eventpage from './pages/Eventpage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/eventManagement' exact element={<Eventpage/>}/>
       </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
