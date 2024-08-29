import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import LiveStream from "./pages/LiveStream/LiveStream"
import Gallery from "./pages/Gallery/Gallery"

const App: React.FC = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-stream" element={<LiveStream />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App
