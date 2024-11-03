import React, { lazy, Suspense, useState } from 'react';
import './App.css';
import MailForm from './component/MailForm';
  const Component = lazy(() => import('./component/Component'))
function App() {
   const [toggle,settoggle] = useState(false)
   const appear = () => {
    settoggle((prev) => !prev)
   }

  return (
    <div className="App">
        <button onClick={appear}>{toggle ? 'remove' : 'add'}</button>
        {toggle && (
          <Suspense fallback={<h1>...LOADING</h1>}>
            <Component/>
          </Suspense>
        )}
        <MailForm/>
    </div>
  );
}

export default App;
