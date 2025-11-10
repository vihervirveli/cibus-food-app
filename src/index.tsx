import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import { RecipeList } from './components/RecipeList';
import Sign from './pages/Sign';
import Misc from './pages/Misc';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/recipes' element={<RecipeList />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
        <Route path='/misc' element={<Misc />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  throw new Error('Root container not found');
}
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

reportWebVitals();
