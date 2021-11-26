import {Main, Welcome} from 'domains'

import {DataComp} from 'comps'
import { useAppSelector } from 'store';

const App = () => {
  const userUID = useAppSelector(state=>state.fire.userUID)
  // console.log('here');
  
  // console.log(userUID);
  

  return (
    <div className="App">
      <DataComp />
        { userUID ? <Main /> : <Welcome /> }
    </div>
  );
}

export default App;
