import ProblemRow from "./ProblemRow.jsx";
import useApp from "../../customHook/useApp.js";

function ProblemTable() {
  const { isDark, currentProblems } = useApp();

  return (
    <>
      {currentProblems.length === 0 ? (
        <div className={`rounded-lg backdrop-blur-md border ${isDark ? 'bg-slate-800 bg-opacity-30 border-slate-700' : 'bg-white bg-opacity-30 border-white'} flex items-center justify-center h-64 shadow-xl transition-colors duration-300 mt-6`}>
          <p className="text-2xl font-medium">No problems to display</p>
        </div>
      ) : (
      

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

              {currentProblems.map((problem) => (
                <ProblemRow key={problem.id} problem={problem} />
              ))}
              
            </tbody>
          </table>
        </div>
      </div> )}
    </>
  )
}

export default ProblemTable