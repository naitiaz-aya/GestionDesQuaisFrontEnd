import React, { useState } from 'react';
import MyRoutes from "./utils/MyRoutes";
import "./App.css";
import {LoginPage} from  "./pages";

function App() {
  const [token, setToken] = useState();

  
  return (
      <MyRoutes />
  );
}
export default App;
