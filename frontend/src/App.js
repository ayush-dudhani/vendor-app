
import './App.css';
import { useContext } from 'react';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import HomePage  from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import {LinkContainer} from 'react-router-bootstrap';
import {HelmetProvider} from 'react-helmet-async';
import {Nav,Badge,Navbar,Container} from 'react-bootstrap';
import CartPage from './pages/CartPage';
import {Store} from './Store'
import SigninPage from './pages/SigninPage'
function App() {
  // console.log(data.products)
  const {state}=useContext(Store);
  const {cart}=state;

  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>SastaBazaar</Navbar.Brand>
          </LinkContainer>
          <Nav className='me-auto'>
            <Link to ='/cart' className='nav-link'>
              Cart
              {(
                <Badge pill bg="danger">
                    {cart.cartItems.reduce((a,c)=>a+c.quantity,0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
        <Routes>
          <Route path='/product/:slug' element={<ProductPage/>}/>
          <Route path="/"element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/signin' element={<SigninPage/>}/>
        </Routes>
        </Container>
       
      </main>
      <footer>
        <div className='text-center'>All Rights Reserved</div>
      </footer>

    </div>
    </BrowserRouter>

  );
}

export default App;
