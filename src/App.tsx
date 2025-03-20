import { ThemeProvider } from "./components/theme-provider";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import ProtectedRoutes from "./components/custom/Common/ProtectedRoutes";

function App() {
  return (
    <ThemeProvider storageKey="ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
