import { CloseIcon } from "./Icons"

export const Modal = ({ isOpen, title, children, isDark, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black 
    bg-opacity-50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className={`rounded-lg shadow-xl p-6 w-full max-w-md backdrop-blur-sm border ${isDark ? 'bg-slate-800 bg-opacity-50 border-slate-700' : 'bg-white bg-opacity-50 border-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
          <button onClick={onClose} className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} `}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

