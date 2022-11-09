import Login from "./Pages/Login/Login";
import { BrowserRouter as HashRouter, Routes, Route} from "react-router-dom"
import Signup from "./Pages/Signup/Signup";
import MultipleSignup from "./Pages/Signup/MultipleSignup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import "./Pages/PrivateRoute"
import { PrivateRoute } from "./Pages/PrivateRoute";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<PrivateRoute Component={Dashboard} />} />
        <Route basename="/signup" path="/signup" element={<Signup />}/>
        <Route path="/multiple-signup" element={<MultipleSignup />}/>
        <Route basename="/login" path="/login" element={<Login />}/>
        <Route basename="/forgot-password" path="/forgot-password" element={<ResetPassword />}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
