import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageContainer from './components/PageContainer';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <PageContainer>
                  <Component />
                </PageContainer>
              }
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
