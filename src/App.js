import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nave from './Nave'
import Add from './Components/Add'
import View from './Components/View'
import Download from './Components/Download';
import Secondary from './Components/Secondary';
import HSecondary from './Components/HSecondary';
import College from './Components/College';
import Resume from './Components/Resume';
import Certifications from './Components/Certification';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nave />}>
            <Route index element={<View />} />
            <Route path='/add' element={<Add />} />
            <Route path="/secondary" element={<Secondary />} />
            <Route path="/hsecondary" element={<HSecondary />} />
            <Route path="/ug" element={<College />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/download" element={<Download />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
