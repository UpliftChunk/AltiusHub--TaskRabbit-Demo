import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './components/Home.js'
import RootLayout from './components/RootLayout.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasks" element={<RootLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
