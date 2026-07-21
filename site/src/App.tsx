import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LandingPage} from './routes/LandingPage';
import {AiPage} from './routes/AiPage';
import {ManifestoPage} from './routes/ManifestoPage';
import {AboutPage} from './routes/AboutPage';
import {DocsPage} from './routes/DocsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
