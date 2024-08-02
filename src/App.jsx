import { Routes, Route } from 'react-router-dom';
import routes from "./config/router.config";
const App = () => {
  const getRoutes = (routes) => {
    const routesElement = routes.map((item, index) => {
      return (
        <Route index={item.index} path={item.path} element={item.element} key={`${item.path}${index}`}>
          {item.children?.length ? getRoutes(item.children) : null}
        </Route>
      );
    })
    return routesElement;
  }
  return (
    <Routes> { getRoutes(routes) } </Routes>
  );
}
export default App