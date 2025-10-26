import { EditIcon, StatusIcon, TrashIcon } from "../Utils/Icons.jsx"
import { DifficultyBadge } from "../Utils/DifficultyBadge.jsx";
import ProblemRow from "./ProblemRow.jsx";
import useApp from "../../customHook/useApp.js";

function ProblemTable() {
  const { isDark, problems, setUpdateStatusProblem, setActiveModal, MODALS, formatTimeAgo, handleDeleteProblem, handleOpenEdit } = useApp();

  const hoverBg = isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'

  return (
    <>
      <div className={`rounded-lg backdrop-blur-md border ${isDark ? 'bg-slate-800 bg-opacity-30 border-slate-700' : 'bg-white bg-opacity-30 border-white'} overflow-hidden shadow-xl transition-colors duration-300 mt-6`}>
        <div className="overflow-x-auto max-h-[calc(100vh-150px)] overflow-y-auto">
          <table className="w-full">
            <thead className={`${isDark ? 'bg-slate-700 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'}`}>
              <ProblemRow />
            </thead>
            <tbody className="divide-y divide-slate-700">
              {problems.map((problem, idx) => (
                <tr key={problem.id} className={`${idx % 2 === 0 ? (isDark ? 'bg-slate-800 bg-opacity-20' : 'bg-white bg-opacity-20') : ''} ${hoverBg} transition-colors hover:cursor-pointer`}>
                  <td className="relative px-6 py-4">

                    {<button
                      onClick={() => {
                        setUpdateStatusProblem(problem);
                        setActiveModal(MODALS.UPDATE_STATUS)
                      }}
                      className="flex items-center justify-center"
                      title="Click to update status"
                    >
                      <StatusIcon status={problem.status} />
                    </button>}

                  </td>

                  <td className="px-6 py-4 font-medium text-lg">{problem.title}</td>
                  <td className="px-6 py-4">
                    <DifficultyBadge difficulty={problem.difficulty} isDark={isDark} />
                  </td>
                  <td className="px-6 py-4 text-base">
                    {problem.platform}
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {formatTimeAgo(problem.lastUpdateTime)}
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {problem.link ? (
                      <a
                        href={problem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Link
                      </a>
                    ) : (
                      <span className="text-gray-400">No Link</span>
                    )}
                  </td>

                  <td className="p-4 text-center  flex justify-center gap-5">
                    <button onClick={() => handleOpenEdit(problem)} className="p-2 text-[var(--danger-primary)] hover:text-[var(--danger-secondary)] rounded-full hover:bg-[var(--bg-interactive)] transition-colors" title="Edit Problem">
                      <EditIcon />
                      {/* ✏️ */}
                    </button>
                    <button onClick={() => handleDeleteProblem(problem)} className="p-2 hover:text-red-500 text-[var(--danger-primary)] hover:text-[var(--danger-secondary)] rounded-full hover:bg-[var(--bg-interactive)] transition-colors" title="Delete Problem">
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}

export default ProblemTable