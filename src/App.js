import React from 'react';
import WarningPage from './components/Warning-Page';
import './styles.css'; 


const App = () => {
  // Example usage for each warning type
  return (
    <div className="App font-poppins">
     
      {/*<WarningPage type="something-went-wrong" />*/}
      <WarningPage type="404" /> 
      {/* <WarningPage type="coming_soon" /> */}
    </div>
  );
};

export default App;
