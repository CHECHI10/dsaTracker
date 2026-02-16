import { StatusIcon, RefreshIcon } from "../Utils/Icons"
import { DifficultyBadge } from "../Utils/DifficultyBadge";
import { Modal } from "../Utils/Modal";
import useApp from "../../customHook/useApp";

function RandomProbModal() {

  const { isDark, activeModal, setActiveModal, MODALS, randomProblem, handlePracticeRandom } = useApp();

  return (
    <>
      {/* No Problems Error Modal */}
      <Modal
        isOpen={activeModal === MODALS.NO_PROBLEMS_ERROR}
        title="No Problems Available"
        isDark={isDark}
        onClose={() => setActiveModal(MODALS.NONE)}
      >
        <div className="space-y-4">
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            No problems to practice! Please add a problem first.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setActiveModal(MODALS.ADD_PROBLEM)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90"
            >
              Add Problem Now
            </button>
            <button
              onClick={() => setActiveModal(MODALS.NONE)}
              className={`px-4 py-2 rounded-lg ${isDark ? 'bg-slate-700 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Random Problem Modal */}
      <Modal
        isOpen={activeModal === MODALS.RANDOM_PROBLEM}
        title="Random Problem" isDark={isDark}
        onClose={() =>
          setActiveModal(MODALS.NONE)
        }>
        {randomProblem && (
          <div className="space-y-4">
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Title</p>
              <p className="text-lg font-bold text-cyan-400">{randomProblem.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Difficulty</p>
                <DifficultyBadge difficulty={randomProblem.difficulty} isDark={isDark} />
              </div>
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Platform</p>
                <p className="font-semibold">{randomProblem.platform}</p>
              </div>
            </div>
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Current Status</p>
              <p className="font-semibold flex items-center gap-2">
                <StatusIcon status={randomProblem.status} />
                {randomProblem.status}
              </p>
            </div>
            <div className="flex items-center">
              <button onClick={() => setActiveModal(MODALS.NONE)} className={`w-3/4 mr-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-700 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity ${randomProblem.link ? '' : 'cursor-not-allowed'}`}>
                {randomProblem.link ?
                  <a
                    href={randomProblem.link} target="_blank" rel="noreferrer"
                  >
                    Start Practicing
                  </a> : ('No Link Available')}

              </button>
              <div className="w-1/4 flex justify-center">
                <button
                  onClick={() => handlePracticeRandom()}
                  className="p-2 rounded-lg bg-slate-700 text-white/90 hover:bg-slate-600 hover:text-white transition-colors items-center duration-200 flex justify-center w-full"
                >
                  <RefreshIcon />
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default RandomProbModal