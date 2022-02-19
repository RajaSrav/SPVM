import './App.css';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';
import StateComp from './comp/StateComp'
import PropsComp from './comp/PropsComp';
import StateUsingFunctionalComp from './comp/StateUsingFunctionalComp';

function App() {
  return (
    <>
      {/* <h2>Welcome to APSSDC</h2>
      <FunctionalComp />
      <ClassComp />
      <StateComp /> */}
      {/* <PropsComp /> */}
      <StateUsingFunctionalComp />

    </>
  );
}

export default App;
