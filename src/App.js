import Form from './Components/Form';
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import fireBaseDb from './firebase';
function App() {
  const Navbar = lazy(() => import("./Components/Navbar"));
  const Form = lazy(() => import("./Components/Form"));
  const Loader = lazy(() => import("./Components/Loader"));
  const addoredit = obj => {
    const data = fireBaseDb.database().ref('links_info');
    data.push(obj, err => {
      if (err)
        console.log(err);
    })
  }


  return (
    <div  >

      <Suspense fallback={<div style={{ marginTop: '100px' }} >hello  </div>}>

        <Navbar />
        <Form addoredit={addoredit} />
      </Suspense>
    </div>
  );
}





export default App;
