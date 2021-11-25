import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { mainRouter } from "./configs/router";
import NavbarController from "./pages/Header";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }, index) => {
      console.log(Component);
      return (
        <Route
          key={index}
          exact={exact}
          path={path}
          element={Component}
        ></Route>
      );
    });
  };
  return (
    <>
      <NavbarController />
      <Router>
        <Routes>{renderMainRouter()}</Routes>
      </Router>
    </>
  );
}

export default App;
