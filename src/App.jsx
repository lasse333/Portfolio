import './App.scss';
import { Route, Routes } from 'react-router-dom';

// Public
import Layout from './layout/Layout';
import FrontPage from './pages/FrontPage';
import Ommig from './pages/Ommig';
import Projects from './pages/Projects';

import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter ligger i index.js */}

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<FrontPage />} />
          <Route path="ommig" element={<Ommig />} />
          <Route path="projekter" element={<Projects />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
