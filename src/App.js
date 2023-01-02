import { useEffect , lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import { useDispatch } from 'react-redux'
import { getCategory } from './features/categorySlice'
import { userLogIn, getUserInfo } from './features/userSlice'
import { getCartData } from './features/cartSlice'
import Spinner from './components/spinner/spinner'
const Navigation = lazy(() => import('./routes/navigation'));
const Home = lazy(() =>import('./routes/home/home'));
const Shop = lazy(() =>import('./routes/shop'));
const SignIn = lazy(() =>import('./routes/signIn'));
const SignUp = lazy(() =>import('./routes/signUp'));
const Checkout = lazy(() =>import('./routes/checkout/checkout'))


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategory())
    dispatch(userLogIn())
    dispatch(getCartData())
    dispatch(getUserInfo())

  }, [])
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
    </Suspense>
    
  )
}

export default App;
