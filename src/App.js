import { Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './authentication/authentication.component';



const Shop = () =>{
  return (
    <h1>I'm shoping now baby</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
