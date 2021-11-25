import { Route, Routes } from 'react-router-dom';

import {DataComp} from 'comps'
import {Main} from 'domains'

const App = () => {

  return (
    <div className="App">
      <DataComp />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
