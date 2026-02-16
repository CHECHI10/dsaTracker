import { Modal } from "../Utils/Modal"
import useApp from "../../customHook/useApp";

function EditProblemModal() {

  const { isDark, activeModal, setActiveModal, MODALS, formData, setFormData, handleConfirmEdit } = useApp();

  return (
    <>
      {/* Edit Problem Modal */}
      <Modal isOpen={activeModal === MODALS.EDIT_PROBLEM} title="Edit Problem" isDark={isDark} onClose={() => setActiveModal(MODALS.NONE)}>
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Problem title"
              className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Platform</label>
            <select
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            >
              <option>LeetCode</option>
              <option>GeekForGeeks</option>
              <option>CodeForces</option>
              <option>HackerRank</option>
              <option>InterviewBit</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            >
              <option value="unsolved">Unsolved</option>
              <option value="attempted">Attempted</option>
              <option value="solved">Solved</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Difficulty</label>
            <select
              value={formData.difficulty}
              onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <label className={`block text-sm font-medium mb-2 mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Problem Link</label>
            <input
              type="url"
              placeholder="paste link here"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            />
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={() => setActiveModal(MODALS.NONE)}
              className="px-6 py-2.5 text-sm font-semibold text-gray-300 hover:text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => handleConfirmEdit()}
              className="px-6 py-2.5 text-base font-semibold text-black bg-lime-300 hover:bg-lime-400 rounded-lg transition-opacity"
            >
              Confirm Edit
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default EditProblemModal