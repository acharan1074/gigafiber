import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import NewConnectionPage from "@/react-app/pages/NewConnection";
import FeedbackPage from "@/react-app/pages/Feedback";
import SupportPage from "@/react-app/pages/Support";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-connection" element={<NewConnectionPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}
