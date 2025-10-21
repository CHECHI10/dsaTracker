import { StatusIcon, DifficultyBadge, TrashIcon } from "../Icons/Icons"
import { useState } from "react"

function ModalContent({ modalControls, problemsState, editState, theme }) {

  const { setShowAddModal, setShowRandomModal } = modalControls;
  const { problems, setProblems, setRandomProblem } = problemsState;
  const { problemDelete, setProblemDelete, editingStatusProblemId, setEditingStatusProblemId } = editState;
  const { isDark, hoverBg } = theme;

  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);


  const handlePracticeRandom = () => {
    if (problems.length === 0) {
      // alert("No problems to practice! Please add a problem first.");
      return (
        <div>
          <p>No problems to practice! Please add a problem first.</p>
        </div>
      )
    }

    const random = problems[Math.floor(Math.random() * problems.length)]
    setRandomProblem(random)
    setShowRandomModal(true)
  }

  // New status update handler
  const handleUpdateStatus = (problemId, newStatus) => {
    setProblems(problems.map(p =>
      p.id === problemId
        ? { ...p, status: newStatus, lastSolved: "Today" }
        : p
    ));
    setEditingStatusProblemId(null); // Close dropdown after selection
  };

  const handleConfirmDelete = () => {
    if (problemDelete) {
      setProblems(problems.filter(p => p.id !== problemDelete.id));
      setProblemDelete(null); // Close modal
    }
  };

  const handleDeleteProblem = (problem) => {
    setProblemDelete(problem);
  };

  const deleteAllProblems = () => {
    // Open a confirmation modal instead of deleting immediately
    setShowDeleteAllModal(true);
  }

  const handleConfirmDeleteAll = () => {
    setProblems([]);
    setShowDeleteAllModal(false);
  }

  return (

    <main className="flex-1 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-end">
          <button onClick={() => setShowAddModal(true)} className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">Add Problem</button>
          <button onClick={handlePracticeRandom} className={`px-6 py-2 ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-lg font-semibold ${isDark ? 'hover:bg-slate-600' : 'hover:bg-gray-300'} transition-colors`}>🎲 Practice Random</button>

          <button
            onClick={deleteAllProblems}
            disabled={problems.length === 0}
            className={`px-6 py-2.5 text-base font-semibold text-white rounded-lg transition-opacity ${problems.length === 0 ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700'}`}
          >
            Delete All
          </button>
        </div>

        {/* Problems Table */}
        <div className={`rounded-lg backdrop-blur-md border ${isDark ? 'bg-slate-800 bg-opacity-30 border-slate-700' : 'bg-white bg-opacity-30 border-white'} overflow-hidden shadow-xl transition-colors duration-300`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDark ? 'bg-slate-700 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'}`}>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Difficulty</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Platform</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Last Update</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Link</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                </tr>
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
                        // <div className="bg-gray-500 top-full left-1/2  mt-3 z-50 w-40">
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

        {/* --- NEW: Delete Confirmation Modal --- */}
        {problemDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="rounded-xl shadow-2xl w-full max-w-md p-6 bg-white/10 backdrop-blur-xl border border-white/20">
              <h2 className="text-4xl font-bold text-white">Confirm Deletion</h2>
              <p className="text-gray-300 my-4 text-sm">
                Are you sure you want to delete the problem "{problemDelete.title}"? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setProblemDelete(null)}
                  className="px-6 py-2.5 text-sm font-semibold text-gray-300 hover:text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-6 py-2.5 text-base font-semibold text-white bg-red-500 hover:bg-red-700 rounded-lg transition-opacity"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- Delete All Confirmation Modal --- */}
        {showDeleteAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="rounded-xl shadow-2xl w-full max-w-md p-6 bg-white/10 backdrop-blur-xl border border-white/20">
              <h2 className="text-4xl font-bold text-white">Confirm Delete All</h2>
              <p className="text-gray-300 my-4 text-sm">
                Are you sure you want to delete all problems? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowDeleteAllModal(false)}
                  className="px-6 py-2.5 text-sm font-semibold text-gray-300 hover:text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDeleteAll}
                  className="px-6 py-2.5 text-base font-semibold text-white bg-red-500 hover:bg-red-700 rounded-lg transition-opacity"
                >
                  Delete All
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>

  )
}

export default ModalContent