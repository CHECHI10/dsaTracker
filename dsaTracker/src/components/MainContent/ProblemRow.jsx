import useApp from "../../customHook/useApp";
import { StatusIcon, TrashIcon } from "../Utils/Icons";
import { DifficultyBadge } from "../Utils/DifficultyBadge";

function ProblemRow({ problem, idx}) {

  const { isDark, hoverBg, setUpdateStatusProblem, setActiveModal, MODALS, formatTimeAgo, handleOpenEdit, handleDeleteProblem} = useApp();

  return (
    <tr key={problem.id} className={`${idx % 2 === 0 ? (isDark ? 'bg-slate-800 bg-opacity-20' : 'bg-white bg-opacity-20') : ''} transition-colors hover:cursor-pointer`}>
      <td className={`relative px-6 py-4 text-center ${hoverBg}`}
        onClick={() => {
          setUpdateStatusProblem(problem);
          setActiveModal(MODALS.UPDATE_STATUS)
        }}
        title="Click to update status"
      >
        <div className="flex justify-center">
          {<button
            /* onClick={() => {
              setUpdateStatusProblem(problem);
              setActiveModal(MODALS.UPDATE_STATUS)
            }} */
            className="flex justify-center"
            title="Click to update status"
          >
            <StatusIcon status={problem.status} />
          </button>}
        </div>

      </td>

      <td className={`px-6 py-4 font-medium text-lg text-center ${hoverBg}`}>{problem.title}</td>
      <td className="px-6 py-4 text-center">
        <DifficultyBadge difficulty={problem.difficulty} isDark={isDark} />
      </td>
      <td className="px-6 py-4 text-base text-center">
        {problem.platform}
      </td>
      <td className={`px-6 py-4 text-sm text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {/* {formatTimeAgo(problem.lastUpdateTime)} */}
        {formatTimeAgo(problem.lastUpdate)}
      </td>
      <td className={`px-6 py-4 text-sm text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} ${hoverBg}`}>
        {problem.link ? (
          <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {/* Link */}
            {/* 🔗 */}
            Solve
          </a>
        ) : (
          <span className="text-gray-400">Not Available</span>
        )}
      </td>

      <td className={`p-4 text-center  flex justify-center gap-5 ${hoverBg}`}>
        <button onClick={() => handleOpenEdit(problem)} className="p-2 text-[var(--danger-primary)] hover:text-[var(--danger-secondary)] rounded-full hover:bg-[var(--bg-interactive)] transition-colors" title="Edit Problem">
          {/* <EditIcon /> */}
          ✏️
        </button>
        <button onClick={() => handleDeleteProblem(problem)} className="p-2 hover:text-red-500 text-[var(--danger-primary)] hover:text-[var(--danger-secondary)] rounded-full hover:bg-[var(--bg-interactive)] transition-colors" title="Delete Problem">
          <TrashIcon />
        </button>
      </td>
    </tr>
  )
}

export default ProblemRow