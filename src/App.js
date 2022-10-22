import Website from './Website';
import Solver from './Solver';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, {Fragment} from 'react';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Website/>}/>
          <Route exact path='/solver' element={<Solver/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
