export const DifficultyBadge = ({ difficulty, isDark }) => {
  const bgColor =
    difficulty === 'Easy' ? (isDark ? 'bg-green-900' : 'bg-green-200') :
      difficulty === 'Medium' ? (isDark ? 'bg-yellow-900' : 'bg-yellow-200') :
        (isDark ? 'bg-red-900' : 'bg-red-200')

  const textColor =
    difficulty === 'Easy' ? (isDark ? 'text-green-300' : 'text-green-700') : difficulty === 'Medium' ? (isDark ? 'text-yellow-300' : 'text-yellow-700') : (isDark ? 'text-red-300' : 'text-red-700')

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
      {difficulty}
    </span>
  )
}