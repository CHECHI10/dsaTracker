import ProblemTable from "./ProblemTable.jsx";
import Actionbar from "./Actionbar.jsx";
import AllModals from "../Modals/AllModals.jsx";
import useApp from "../../customHook/useApp.js";
import Pagination from "../Pagination/Pagination";

function MainContent() {
  const { sidebarOpen } = useApp();

  return (
    <>
      <AllModals />

      <main className={`flex-1 p-6 lg:p-8 ${sidebarOpen ? 'ml-64' : 'ml-0'}  transition-all duration-300`}>
        <div className="max-w-7xl mx-auto space-y-6">

          <Actionbar />
          <ProblemTable />

          <Pagination />
          
        </div>
      </main>
    </>
  )
}

export default MainContent