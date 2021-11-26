import {Main, Welcome} from 'domains'
import { Route, Routes } from 'react-router-dom';

import {DataComp} from 'comps'
import { useAppSelector } from 'store';

const App = () => {
  const userUID = useAppSelector(state=>state.fire.userUID)
  console.log('here');
  
  console.log(userUID);
  

  return (
    <div className="App">
      <DataComp />
        { userUID ? <Welcome /> : <Main /> }
    </div>
  );
}

export default App;
