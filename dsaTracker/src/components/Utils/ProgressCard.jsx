function ProgressCard({ label, value, percent }) {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-950 p-4 shadow-md">

      <div className="flex justify-between text-sm font-semibold text-slate-300">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="mt-3 h-2 w-full rounded-full bg-slate-700/60 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-300"
          style={{ width: `${percent || 5}%` }}
        />
      </div>

      <div className="mt-2 text-right text-xs font-bold text-slate-300">
        {percent}%
      </div>
    </div>
  );
}

export default ProgressCard