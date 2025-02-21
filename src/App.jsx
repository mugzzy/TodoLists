import MainLayout from "@/layouts/MainLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddTodo from "./pages/AddTodo";
import Todo from "./pages/Todo";
import Todos from "./pages/Todos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Todos/>} />
      <Route path="/todo/:id" element={<Todo/>} />
      <Route path="/add-todo" element={<AddTodo/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App; 