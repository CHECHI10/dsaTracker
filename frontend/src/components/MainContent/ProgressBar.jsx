import useApp from "../../customHook/useApp";
import ProgressCard from "../Utils/ProgressCard.jsx";

function Progressbar() {
  const { problems, calculateStats } = useApp();

  const stats = calculateStats(problems);
  
  console.log("STATS", stats)
  return (
    <>
      <div className="w-full mt-6">
        <div className="grid grid-cols-4 gap-6 mt-6">
            <ProgressCard
              label="Overall"
              value={`${stats.solved} / ${stats.total}`}
              percent={
                stats.total === 0
                  ? 0
                  : Math.round((stats.solved / stats.total) * 100)
              }
            />

            <ProgressCard
              label="Easy"
              value={`${stats.difficulty.easy.solved} / ${stats.difficulty.easy.total}`}
              percent={
                stats.difficulty.easy.total === 0
                  ? 0
                  : Math.round(
                    (stats.difficulty.easy.solved /
                      stats.difficulty.easy.total) *
                    100
                  )
              }
            />

            <ProgressCard
              label="Medium"
              value={`${stats.difficulty.medium.solved} / ${stats.difficulty.medium.total}`}
              percent={
                stats.difficulty.medium.total === 0
                  ? 0
                  : Math.round(
                    (stats.difficulty.medium.solved /
                      stats.difficulty.medium.total) *
                    100
                  )
              }
            />

            <ProgressCard
              label="Hard"
              value={`${stats.difficulty.hard.solved} / ${stats.difficulty.hard.total}`}
              percent={
                stats.difficulty.hard.total === 0
                  ? 0
                  : Math.round(
                    (stats.difficulty.hard.solved /
                      stats.difficulty.hard.total) *
                    100
                  )
              }
            />


          
        </div>
      </div>
    </>
  )
}

export default Progressbar