import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import FontCycleText from './components/FontCycleText.jsx'

function RootApp() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return showIntro ? <FontCycleText /> : <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics/>
    <RootApp />
    <SpeedInsights/>
  </React.StrictMode>,
)
