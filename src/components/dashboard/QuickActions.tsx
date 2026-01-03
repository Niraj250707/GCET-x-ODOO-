import { Clock, Calendar, FileText, HelpCircle, Wallet, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: Clock, label: "Mark Attendance", path: "/attendance", color: "bg-primary/10 text-primary" },
  { icon: Calendar, label: "Apply Leave", path: "/leave", color: "bg-success/10 text-success" },
  { icon: Wallet, label: "View Salary", path: "/salary", color: "bg-warning/10 text-warning" },
  { icon: FileText, label: "Documents", path: "/documents", color: "bg-purple-500/10 text-purple-500" },
  { icon: Users, label: "Community", path: "/community", color: "bg-pink-500/10 text-pink-500" },
  { icon: HelpCircle, label: "Help Desk", path: "/helpdesk", color: "bg-cyan-500/10 text-cyan-500" },
];

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="font-display font-semibold text-lg mb-4">Quick Actions</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {actions.map((action) => (
          <button
            key={action.path}
            onClick={() => navigate(action.path)}
            className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
              <action.icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-center">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
