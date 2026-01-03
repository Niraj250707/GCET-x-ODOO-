import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Plus, Clock, CheckCircle, XCircle, Hourglass } from "lucide-react";

const leaveTypes = [
  { id: "paid", label: "Paid Leave", available: 10, color: "bg-primary" },
  { id: "sick", label: "Sick Leave", available: 8, color: "bg-warning" },
  { id: "casual", label: "Casual Leave", available: 2, color: "bg-success" },
  { id: "unpaid", label: "Unpaid Leave", available: "∞", color: "bg-secondary" },
];

const leaveHistory = [
  { id: 1, type: "Paid Leave", from: "Dec 25, 2024", to: "Dec 26, 2024", days: 2, status: "approved", reason: "Family vacation" },
  { id: 2, type: "Sick Leave", from: "Dec 10, 2024", to: "Dec 10, 2024", days: 1, status: "approved", reason: "Not feeling well" },
  { id: 3, type: "Casual Leave", from: "Dec 2, 2024", to: "Dec 2, 2024", days: 1, status: "approved", reason: "Personal work" },
  { id: 4, type: "Paid Leave", from: "Jan 15, 2025", to: "Jan 17, 2025", days: 3, status: "pending", reason: "Trip planned" },
];

export default function Leave() {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="w-4 h-4 text-success" />;
      case "rejected": return <XCircle className="w-4 h-4 text-destructive" />;
      case "pending": return <Hourglass className="w-4 h-4 text-warning" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved": return "badge-success";
      case "rejected": return "badge-danger";
      case "pending": return "badge-warning";
      default: return "badge-primary";
    }
  };

  return (
    <Layout userName="Ravi Kumar">
      <div className="container py-6 px-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">Leave Management</h1>
            <p className="text-muted-foreground">Apply and track your leave requests</p>
          </div>
          <button
            onClick={() => setShowApplyModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Apply Leave</span>
          </button>
        </div>

        {/* Leave Balance Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {leaveTypes.map((leave) => (
            <div key={leave.id} className="glass-card rounded-2xl p-5 border-l-4 border-l-primary">
              <div className={`w-10 h-10 rounded-xl ${leave.color}/10 flex items-center justify-center mb-3`}>
                <Calendar className={`w-5 h-5 ${leave.color.replace("bg-", "text-")}`} />
              </div>
              <p className="text-sm text-muted-foreground">{leave.label}</p>
              <p className="text-2xl font-bold font-display mt-1">{leave.available}</p>
              <p className="text-xs text-muted-foreground">days available</p>
            </div>
          ))}
        </div>

        {/* Calendar Preview */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-lg">January 2025</h3>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">←</button>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">→</button>
            </div>
          </div>
          
          {/* Simple Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-2 text-muted-foreground font-medium">{day}</div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2; // Offset for starting day
              const isValid = day > 0 && day <= 31;
              const isLeave = [15, 16, 17].includes(day);
              const isHoliday = [1, 26].includes(day);
              const isToday = day === 3;
              
              return (
                <div
                  key={i}
                  className={`py-2 rounded-lg ${
                    isToday ? "gradient-primary text-white font-bold" :
                    isLeave ? "bg-warning/20 text-warning" :
                    isHoliday ? "bg-destructive/20 text-destructive" :
                    isValid ? "hover:bg-secondary cursor-pointer" : "text-muted-foreground/30"
                  }`}
                >
                  {isValid ? day : ""}
                </div>
              );
            })}
          </div>
          
          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded gradient-primary" />
              <span>Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-warning/50" />
              <span>Your Leave</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-destructive/50" />
              <span>Holiday</span>
            </div>
          </div>
        </div>

        {/* Leave History */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg mb-4">Leave History</h3>
          <div className="space-y-3">
            {leaveHistory.map((leave) => (
              <div
                key={leave.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-secondary/50 gap-4"
              >
                <div className="flex items-start gap-4">
                  {getStatusIcon(leave.status)}
                  <div>
                    <p className="font-medium">{leave.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {leave.from} {leave.from !== leave.to && `- ${leave.to}`}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{leave.reason}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:text-right">
                  <div>
                    <p className="font-semibold">{leave.days} day{leave.days > 1 ? "s" : ""}</p>
                    <span className={`badge ${getStatusBadge(leave.status)} capitalize`}>
                      {leave.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Leave Modal */}
        {showApplyModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl p-6 w-full max-w-md animate-scale-in">
              <h3 className="font-display font-semibold text-xl mb-4">Apply for Leave</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Leave Type</label>
                  <select className="input-field mt-1">
                    <option>Paid Leave</option>
                    <option>Sick Leave</option>
                    <option>Casual Leave</option>
                    <option>Unpaid Leave</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">From Date</label>
                    <input type="date" className="input-field mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">To Date</label>
                    <input type="date" className="input-field mt-1" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Reason</label>
                  <textarea
                    className="input-field mt-1"
                    rows={3}
                    placeholder="Enter reason for leave..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowApplyModal(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary flex-1">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
