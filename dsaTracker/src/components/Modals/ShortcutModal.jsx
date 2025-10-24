import { Modal } from '../Utils/Modal'

function ShortcutModal({ modalControls, theme}) {
  const { MODALS, activeModal, setActiveModal } = modalControls;
  const { isDark } = theme;
  return (
    <>
      {/* Keyboard Shortcuts Help Modal */}

      <Modal
        isOpen={activeModal === MODALS.HELP}
        title="⌨️ Keyboard Shortcuts"
        isDark={isDark}
        onClose={() => setActiveModal(MODALS.NONE)}
      >
        <div className="space-y-3">
          <div className={`flex justify-between py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>Add Problem</span>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + N</kbd>
          </div>
          <div className={`flex justify-between py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>Random Practice</span>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + P</kbd>
          </div>
          <div className={`flex justify-between py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>Delete All</span>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + D</kbd>
          </div>
          <div className={`flex justify-between py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>Toggle Theme</span>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + T</kbd>
          </div>
          <div className={`flex justify-between py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>Close Modal</span>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Esc</kbd>
          </div>
          <div className={`flex justify-between py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>Close Sidebar</span>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + S</kbd>
          </div>
          <div className={`flex justify-between py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span>Show Shortcuts</span>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl + /</kbd>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ShortcutModal