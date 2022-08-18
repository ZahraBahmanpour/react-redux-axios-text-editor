import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./components/tabs/Tabs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./index.css";
import { PrivateRoute } from "./route/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Container className="mt-2">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          >
            <Route path=":id" element={<Tabs />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
