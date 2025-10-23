import { StatusIcon, DifficultyBadge, TrashIcon, Modal } from "../Icons/Icons"
// import { useState } from "react"
import ModalAddProb from "../Modals/ModalAddProb.jsx"
import ModalDelete from "../Modals/ModalDelete.jsx";

function ModalContent({ modalControls, problemsState, editState, theme, formDataState }) {

  const { MODALS, activeModal, setActiveModal } = modalControls;
  const { problems, setProblems, setRandomProblem } = problemsState;
  const { problemDelete, setProblemDelete, editingStatusProblemId, setEditingStatusProblemId } = editState;
  const { isDark, hoverBg } = theme;
  const { formData, setFormData } = formDataState;

  const handlePracticeRandom = () => {
    if (problems.length === 0) {
      setActiveModal(MODALS.NO_PROBLEMS_ERROR);
      return;

    }
    // to pick a random problem
    const random = problems[Math.floor(Math.random() * problems.length)]
    setRandomProblem(random);
    setActiveModal(MODALS.RANDOM_PROBLEM);
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

  const handleDeleteProblem = (problem) => {
    setProblemDelete(problem);
    setActiveModal(MODALS.DELETE_SINGLE);
  };

  const deleteAllProblems = () => {
    // Open a confirmation modal instead of deleting immediately
    setActiveModal(MODALS.DELETE_ALL);
  }


  return (

    <>

      <ModalAddProb
        isDark={isDark}
        problems={problems}
        setProblems={setProblems}
        formData={formData}
        setFormData={setFormData}
        MODALS={MODALS}
        setActiveModal={setActiveModal}
        activeModal={activeModal}
      />

      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-end">
            <button
              onClick={() =>
                setActiveModal(MODALS.ADD_PROBLEM)
              }
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">Add Problem</button>
            <button
              onClick={() => {
                handlePracticeRandom();
              }}
              className={`px-6 py-2 ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-lg font-semibold ${isDark ? 'hover:bg-slate-600' : 'hover:bg-gray-300'} transition-colors`}>🎲 Practice Random</button>

            {/* <button
            onClick={() => {
              handlePracticeRandom();
              if (problems.length) {
                setActiveModal(MODALS.RANDOM_PROBLEM);
              } else {
                setActiveModal(MODALS.NONE);
              }
            }}
            className={`px-6 py-2 ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-lg font-semibold ${isDark ? 'hover:bg-slate-600' : 'hover:bg-gray-300'} transition-colors`}>🎲 Practice Random</button> */}

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

          <ModalDelete
            modalControls={{ MODALS, activeModal, setActiveModal }}
            editState={{ problemDelete }}
            problemsState={{ problems, setProblems }}
            theme={{ isDark }}
          />

        </div>
      </main>

    </>

  )
}

export default ModalContent