import { StatusIcon, TrashIcon } from "../Utilis/Icons"
import { DifficultyBadge } from "../Utilis/DifficultyBadge";
import ProblemRow from "./ProblemRow.jsx";
import DeleteModal from "../Modals/DeleteModal.jsx";

function ProblemTable({ editState, theme, modalControls, problemsState }) {

  const { problemToDelete, setProblemToDelete, editingStatusProblemId, setEditingStatusProblemId } = editState;
  const { isDark, hoverBg } = theme;
  const { MODALS, activeModal, setActiveModal } = modalControls;
  const { problems, setProblems } = problemsState;

  // New status update handler
  const handleUpdateStatus = (problemId, newStatus) => {
    setProblems(problems.map(p =>
      p.id === problemId
        ? { ...p, status: newStatus, lastSolved: "Today" }
        : p
    ));
    setEditingStatusProblemId(null); // Close dropdown after selection
  };

  const handleDeleteProblem = (problem) => {
    setProblemToDelete(problem);
    setActiveModal(MODALS.DELETE_SINGLE);
  };

  return (
    <>
      <div className={`rounded-lg backdrop-blur-md border ${isDark ? 'bg-slate-800 bg-opacity-30 border-slate-700' : 'bg-white bg-opacity-30 border-white'} overflow-hidden shadow-xl transition-colors duration-300`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDark ? 'bg-slate-700 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'}`}>
              <ProblemRow />
            </thead>
            <tbody className="divide-y divide-slate-700">
              {problems.map((problem, idx) => (
                <tr key={problem.id} className={`${idx % 2 === 0 ? (isDark ? 'bg-slate-800 bg-opacity-20' : 'bg-white bg-opacity-20') : ''} ${hoverBg} transition-colors hover:cursor-pointer`}>
                  <td className="relative px-6 py-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); setEditingStatusProblemId(problem.id) }}
                      className="flex items-center justify-center"
                    >
                      <StatusIcon status={problem.status} />
                    </button>

                    {editingStatusProblemId === problem.id && (
                      <div className="absolute left-1/2 -top-1/3 ml-1 mt-1 z-50 w-32 h-auto
   bg-slate-800 border border-white/20 rounded-xl shadow-2xl
  ring-1 ring-white/10 overflow-hidden transition-all duration-200">
                        {["Solved", "Attempted", "Unsolved"].map((status) => (
                          <button
                            key={status}
                            onClick={() => { handleUpdateStatus(problem.id, status) }}
                            className="flex items-center gap-3 px-3 py-2 text-sm text-slate-200 
                       hover:bg-[var(--bg-tertiary)] hover:text-white transition-colors"
                          >
                            <StatusIcon status={status} />
                            <span className="capitalize">{status}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </td>

                  <td className="px-6 py-4 font-medium">{problem.title}</td>
                  <td className="px-6 py-4">
                    <DifficultyBadge difficulty={problem.difficulty} isDark={isDark} />
                  </td>
                  <td className="px-6 py-4 text-sm">{problem.platform}</td>
                  <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{problem.lastUpdate}</td>
                  <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{problem.link ? (
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
                  )}</td>

                  <td className="p-4 text-center">
                    <button onClick={() => handleDeleteProblem(problem)} className="p-2 text-[var(--danger-primary)] hover:text-[var(--danger-secondary)] rounded-full hover:bg-[var(--bg-interactive)] transition-colors" title="Delete Problem">
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteModal
        modalControls={{ MODALS, activeModal, setActiveModal }}
        editState={{ problemToDelete }}
        problemsState={{ problems, setProblems }}
        theme={{ isDark }}
      />

    </>
  )
}

export default ProblemTable