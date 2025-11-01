// import { EditIcon, StatusIcon, TrashIcon } from "../Utils/Icons.jsx"
// import { DifficultyBadge } from "../Utils/DifficultyBadge.jsx";
import ProblemRow from "./ProblemRow.jsx";
import useApp from "../../customHook/useApp.js";

function ProblemTable() {
  const { isDark, getSortedProblems } = useApp();
  // const { isDark, problems, setUpdateStatusProblem, setActiveModal, MODALS, formatTimeAgo, handleDeleteProblem, handleOpenEdit, hoverBg, /* getSortedProblems */ } = useApp();

  const sortedProblems = getSortedProblems();

  // const hoverBg = isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'

  return (
    <>
      <div className={`rounded-lg backdrop-blur-md border ${isDark ? 'bg-slate-800 bg-opacity-30 border-slate-700' : 'bg-white bg-opacity-30 border-white'} overflow-hidden shadow-xl transition-colors duration-300 mt-6`}>
        <div className="overflow-x-auto max-h-[calc(100vh-150px)] overflow-y-auto">
          <table className="w-full">
            <thead className={`${isDark ? 'bg-slate-700 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'}`}>
              <tr>
                <th className="px-6 py-4 text-center text-lg font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-lg font-semibold">Title</th>
                <th className="px-6 py-4 text-center text-lg font-semibold">Difficulty</th>
                <th className="px-6 py-4 text-center text-lg font-semibold">Platform</th>
                <th className="px-6 py-4 text-center text-lg font-semibold">Last Update</th>
                <th className="px-6 py-4 text-center text-lg font-semibold">Link</th>
                <th className="px-6 py-4 text-center text-lg font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">

              {sortedProblems.map((problem) => (
                <ProblemRow key={problem.id} problem={problem} />
              ))}

              {/* {problems.map((problem, idx) => (
                <ProblemRow problem={problem} idx={idx} key={problem.id}/>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}

export default ProblemTable