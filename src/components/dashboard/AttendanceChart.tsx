import { useMemo } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const data = [8.5, 9, 8, 8.5, 7.5, 0, 0]; // Hours worked

export function AttendanceChart() {
  const maxValue = Math.max(...data);

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-lg">This Week</h3>
          <p className="text-sm text-muted-foreground">Hours worked per day</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">41.5h</p>
          <p className="text-xs text-muted-foreground">Total hours</p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2 h-40">
        {data.map((value, index) => (
          <div key={days[index]} className="flex-1 flex flex-col items-center gap-2">
            <div className="relative w-full flex justify-center">
              <div
                className={`w-full max-w-10 rounded-t-lg transition-all ${
                  value > 0 ? "gradient-primary" : "bg-secondary"
                }`}
                style={{
                  height: `${(value / (maxValue || 1)) * 100}%`,
                  minHeight: value > 0 ? "20px" : "8px",
                }}
              />
              {value > 0 && (
                <span className="absolute -top-6 text-xs font-medium">
                  {value}h
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {days[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
