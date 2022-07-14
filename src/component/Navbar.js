import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../css/Navbar.css'
import { Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
function NavbarBoot() {
  const [mobileSelect, setMobileSelect] = useState(false)
  
  return(

    <nav className='nav-container'>
      <div className="nav-logo">
        YSC GBM
      </div>
      <div className="hamperg">
        {mobileSelect?<button onClick={()=>{setMobileSelect(false)}}><CloseIcon/></button>:<button onClick={()=>{setMobileSelect(true)}}><MenuIcon/></button>}
      </div>
      <div className="navLinks" style={{display:mobileSelect?'block':'none'}}>
        <ul className="list-Ul">
          <li className="link"><Link to='/'>Home</Link></li>
          <li className="link"><Link to='/eventManagement'>Event</Link></li>
          <li className="link"><Link to='/usersLog'>Users</Link></li>
          <li className="link"><Link to='/aboutGBM'>About GBM</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarBoot


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavbarBoot() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">H</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarBoot;