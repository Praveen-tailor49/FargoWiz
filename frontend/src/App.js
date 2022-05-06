import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import {Routes, Route} from 'react-router-dom'
import UserData from './page/UserData';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userInfo' element={<UserData/>}/>
      </Routes>
      
    </>
  );
}

export default App;
