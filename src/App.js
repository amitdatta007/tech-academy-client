import {RouterProvider} from 'react-router-dom';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
