const leaveTypes = [
  { type: "Paid Leave", used: 5, total: 15, color: "bg-primary" },
  { type: "Sick Leave", used: 2, total: 10, color: "bg-warning" },
  { type: "Casual Leave", used: 3, total: 5, color: "bg-success" },
];

export function LeaveBalance() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-lg">Leave Balance</h3>
          <p className="text-sm text-muted-foreground">Your remaining leaves</p>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {leaveTypes.map((leave) => {
          const remaining = leave.total - leave.used;
          const percentage = (leave.used / leave.total) * 100;

          return (
            <div key={leave.type} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{leave.type}</span>
                <span className="text-muted-foreground">
                  <span className="text-foreground font-semibold">{remaining}</span>
                  /{leave.total} days
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${leave.color}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
