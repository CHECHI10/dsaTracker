import { Modal } from "../Utils/Modal";
import { StatusIcon } from "../Utils/Icons";
import useApp from "../../customHook/useApp";

function UpdateStatusModal() {

  const { isDark, activeModal, setActiveModal, MODALS, updateStatusProblem, handleUpdateStatus } = useApp();

  return (
    <>
      {/* Update Status Modal */}
      <Modal
        isOpen={activeModal === MODALS.UPDATE_STATUS}
        title="Update Problem Status"
        isDark={isDark}
        onClose={() => setActiveModal(MODALS.NONE)}
      >
        <div className="space-y-4">
          {/* Problem title */}
          <p className={`text-m ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Update status for: <strong>{updateStatusProblem?.title}</strong>
          </p>

          {/* Current status */}
          <div className={`px-3 py-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Current: <span className="font-semibold">{updateStatusProblem?.status}</span>
            </p>
          </div>

          {/* Status buttons */}
          <div className="space-y-2">
            {["solved", "attempted", "unsolved"].map((status) => (
              <button
                key={status}
                onClick={() => handleUpdateStatus(status)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${updateStatusProblem?.status === status
                  ? isDark
                    ? 'bg-slate-600 text-white border-2 border-cyan-500/50'
                    : 'bg-gray-300 text-gray-900 border-2 border-cyan-600/50'
                  : isDark
                    ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
              >
                <StatusIcon status={status} />
                <span>{status}</span>
                {updateStatusProblem?.status === status && (
                  <span className="ml-auto text-sm font-black opacity-70">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UpdateStatusModal