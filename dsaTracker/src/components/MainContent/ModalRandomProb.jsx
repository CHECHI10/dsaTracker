import { Modal, DifficultyBadge, StatusIcon } from "../Icons/Icons"

function ModalRandomProb({setShowRandomModal, showRandomModal, isDark, randomProblem}) {
 

  return (
    <Modal isOpen={showRandomModal} title="Random Problem" isDark={isDark} onClose={() => setShowRandomModal(false)}>
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
            <p className="font-semibold">
              <StatusIcon status={randomProblem.status}/> 
              {randomProblem.status}
            </p>
          </div>
          <button onClick={() => setShowRandomModal(false)} className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
            {randomProblem.link ? <a href={randomProblem.link} target="_blank">Start Practicing</a> : 'No Link Available'}
          </button>
        </div>
      )}
    </Modal>
  )
}

export default ModalRandomProb