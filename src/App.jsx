import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { ClickCursorCircle } from "./components/ClickCursorCircle";
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <>
      <ClickCursorCircle /> {/* 👈 Add this before everything */}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </>
  );
}

export default App;
