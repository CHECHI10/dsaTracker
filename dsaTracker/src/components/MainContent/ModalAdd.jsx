import { Modal } from "../Icons/Icons"
function ModalAdd({isDark, formData, problems, showAddModal, setProblems, setFormData, setShowAddModal}) {
  const handleAddProblem = () => {
    if (formData.title.trim()) {
      const newProblem = {
        id: Math.max(...problems.map((p) => p.id), 0) + 1,
        title: formData.title,
        platform: formData.platform,
        status: formData.status,
        difficulty: formData.difficulty,
        lastUpdate: 'Just now',
      }

      setProblems([newProblem, ...problems])
      setFormData({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium' })
      setShowAddModal(false) 
    }
  }

  return (
    <Modal isOpen={showAddModal} title="Add New Problem" isDark={isDark} onClose={() => setShowAddModal(false)}>
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Title</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`} placeholder="Problem title" />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Platform</label>
            <select value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}>
              <option>LeetCode</option>
              <option>GeekForGeeks</option>
              <option>CodeForces</option>
              <option>HackerRank</option>
              <option>InterviewBit</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Status</label>
            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}>
              <option>Unsolved</option>
              <option>Attempted</option>
              <option>Solved</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Difficulty</label>
            <select value={formData.difficulty} onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <button onClick={handleAddProblem} className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">Add Problem</button>
        </div>
      </Modal>
  )
}

export default ModalAdd