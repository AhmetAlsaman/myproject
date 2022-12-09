import React, { Suspense } from 'react'
import { Route, Routes } from "react-router-dom";

// const Nav = React.lazy(() => import( "./components/nav/Nav"))
const SignIn = React.lazy(() => import( "./pages/signin/SignIn"))
const SignUp = React.lazy(() => import( "./pages/signup/SignUp"))


function App() {
  return (
    <>
    {/* <Nav /> */}
    <Routes>
    <Route path='/signin' element={<Suspense><SignIn /></Suspense>} />
    <Route path='/signup' element={<Suspense><SignUp /></Suspense>} />

      </Routes></>
  );
}

export default App;
