import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import LessonsPage from "./pages/LessonsPage";
import TargetPage from "./pages/TargetPage";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="lessons" element={<LessonsPage />} />
          <Route path="lessons/:lessonId" element={<TargetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
