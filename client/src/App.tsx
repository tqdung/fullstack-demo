import { Routes, Route } from 'react-router-dom'

import NotFoundPage from '@pages/NotFound/NotFound';

import { mainRoutes, renderRoutes } from '@routes/index';

const DynamicRoutes = () => {
  return (
    <Routes>
      {renderRoutes(mainRoutes)}
      <Route key="not-found" path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function App() {
  return (
    <>
      <DynamicRoutes />
    </>
  )
}

export default App
