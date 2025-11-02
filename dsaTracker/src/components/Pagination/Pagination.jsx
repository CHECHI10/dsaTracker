import useApp from '../../customHook/useApp';
import { useEffect } from 'react';

function Pagination() {
  const { isDark, problems, probPerPage, setCurrentPage, currentPage } = useApp();

  const totalProblems = problems.length;
  const totalPages = Math.ceil(totalProblems / probPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if(totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  console.log(totalPages);
  console.log(totalProblems);
  console.log(probPerPage);

  // it will decide which pages to show
  const getVisiblePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-2 mt-6 select-none">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200
          ${isDark
            ? currentPage === 1
              ? 'bg-slate-800 border-slate-700 text-gray-500 cursor-not-allowed'
              : 'bg-slate-800 border-slate-700 text-gray-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white'
            : currentPage === 1
              ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:text-white'
          }`}
      >
        Prev
      </button>

      {/* Page Buttons */}
      {visiblePages.map((page, index) =>
        page === '...' ? (
          <span
            key={`dots-${index}`}
            className={`px-2 text-gray-400 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200
              ${
                isDark
                  ? currentPage === page
                    ? 'bg-blue-500 text-white border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)] scale-105'
                    : 'bg-slate-800 border-slate-700 text-gray-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white'
                  : currentPage === page
                    ? 'bg-blue-500 text-white border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)] scale-105'
                    : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:text-white'
              }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200
          ${isDark
            ? currentPage === totalPages
              ? 'bg-slate-800 border-slate-700 text-gray-500 cursor-not-allowed'
              : 'bg-slate-800 border-slate-700 text-gray-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white'
            : currentPage === totalPages
              ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:text-white'
          }`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination