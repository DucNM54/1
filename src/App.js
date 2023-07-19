import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import './css/component-style.css';
import './css/responsive-col.css';
import './css/styles.css';
import JlosLayout from './layout/JlosLayout';
import HoSoVay from "./pages/HoSoVay";



function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/" element={<PrivateRoute />}>
    //       <Route path="" element={<Home />} />
    //       <Route path="/*" element={<jlosLayout />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<JlosLayout />} />
        <Route path="/ho-so-vay" element={<HoSoVay />} />
        <Route path="/" element={<Navigate to="/admin/danh-sach-ho-so-vay" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
