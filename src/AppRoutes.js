import { Nav } from "./Features/components/Nav/Nav";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/products', // Define la ruta "/products"
    element: <Nav />, // Asigna el componente Products a esta ruta
  },
];

export default AppRoutes;
