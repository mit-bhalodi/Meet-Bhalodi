import HomeScreen from "./components/HomeScreen"
import { Suspense } from "react"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Suspense fallback={<div>Loading.</div>}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Suspense>
  )
}

export default App
