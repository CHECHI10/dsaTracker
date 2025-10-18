import { StatusIcon, DifficultyBadge } from "../Icons/Icons"

function ModalContent({setShowAddModal, problems, isDark, hoverBg, setRandomProblem, setShowRandomModal}) {
   const handlePracticeRandom = () => {
    if (problems.length > 0) {
      const random = problems[Math.floor(Math.random() * problems.length)]
      setRandomProblem(random)
      setShowRandomModal(true)
    }
  }

  return (

    <main className="flex-1 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-end">
          <button onClick={() => setShowAddModal(true)} className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">+ Add Problem</button>
          <button onClick={handlePracticeRandom} className={`px-6 py-2 ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-lg font-semibold ${isDark ? 'hover:bg-slate-600' : 'hover:bg-gray-300'} transition-colors`}>🎲 Practice Random</button>
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
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {problems.map((problem, idx) => (
                  <tr key={problem.id} className={`${idx % 2 === 0 ? (isDark ? 'bg-slate-800 bg-opacity-20' : 'bg-white bg-opacity-20') : ''} ${hoverBg} transition-colors hover:cursor-pointer`}>
                    <td className="px-6 py-4">
                      <StatusIcon status={problem.status} />
                    </td>
                    <td className="px-6 py-4 font-medium">{problem.title}</td>
                    <td className="px-6 py-4">
                      <DifficultyBadge difficulty={problem.difficulty} isDark={isDark} />
                    </td>
                    <td className="px-6 py-4 text-sm">{problem.platform}</td>
                    <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{problem.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>

  )
}

export default ModalContent