import { useState } from 'react';
// This is meant to be used inline
import { createPortal } from 'react-dom';
import './App.css';

export default function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="App">
      {/* Whatever we have here in the container it will be below the other content
          We can look at this example:
          https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */}
     <div className="container" onClick={() => {
      console.log('Clicked on the container');
     }}>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? 'Show Modal' : 'Hide Modal'}
      </button>
      {isHidden || <Modal />}
     </div>

     <p className="other"> Other Content</p>
    </div>
  );
}

function Modal() {
  // We then wrap our element with our portal
  // Then we want to append our portal where needed as the second parameter
  return createPortal(<p className="modal">Modal</p>, document.getElementById('modal-root'));
}

