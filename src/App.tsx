// import { Header } from "../components/header"
// import { LeftSidebar } from "./components/left-sidebar"
import { MainContent } from "../components/main-content"
import { RightSidebar } from "../components/right-sidebar"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <div className="flex flex-1">
        {/* <LeftSidebar /> */}
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  )
}

export default App
