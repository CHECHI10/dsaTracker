import useApp  from '../../customHook/useApp'

function SortDropdown() {
  const { sortBy, setSortBy, sortOrder, setSortOrder, isDark } = useApp();

  const sortOptions = [
    { value: 'lastUpdate', label: 'Last Update', icon: '🕒' },
    { value: 'status', label: 'Status', icon: '✔️' },
    { value: 'difficulty', label: 'Difficulty', icon: '⚡' },
    { value: 'title', label: 'Title', icon: '📝' },
    { value: 'platform', label: 'Platform', icon: '🌐' },
  ];

  const currentOption = sortOptions.find(opt => opt.value === sortBy);

  return (
    <div className="flex items-center gap-3" title={`Sorting by ${currentOption?.label}`}>
      <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Sort by:
      </span>
      
      {/* Sort By Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={`px-3 py-2 rounded-lg border font-medium transition-colors cursor-pointer ${
          isDark
            ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
            : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.icon} {option.label}
          </option>
        ))}
      </select>

      {/* Sort Order Button */}
      <button
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        className={`p-2 rounded-lg border font-medium transition-all hover:scale-110 ${
          isDark
            ? 'bg-slate-700 border-slate-600 text-cyan-400 hover:bg-slate-600'
            : 'bg-gray-100 border-gray-300 text-cyan-600 hover:bg-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
        title={sortOrder === 'asc' ? 'Ascending (oldest first)' : 'Descending (newest first)'}
      >
        {sortOrder === 'asc' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default SortDropdown;