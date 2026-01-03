import { 
  Home, 
  Clock, 
  Calendar, 
  Wallet, 
  Users, 
  User, 
  Settings, 
  HelpCircle,
  BarChart3,
  FileText,
  LogOut,
  UserCheck,
  Building
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const employeeNavItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: Clock, label: "Attendance", path: "/attendance" },
  { icon: Calendar, label: "Leave", path: "/leave" },
  { icon: Wallet, label: "Payroll", path: "/salary" },
  { icon: Users, label: "Community", path: "/community" },
];

const adminNavItems = [
  { icon: Home, label: "Dashboard", path: "/admin-dashboard" },
  { icon: UserCheck, label: "Employee Management", path: "/admin/employees" },
  { icon: Calendar, label: "Leave Management", path: "/admin/leaves" },
  { icon: Wallet, label: "Payroll", path: "/admin/payroll" },
  { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
  { icon: Building, label: "Organization", path: "/admin/organization" },
];

const secondaryNavItems = [
  { icon: User, label: "Profile", path: "/profile" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: HelpCircle, label: "Help Desk", path: "/helpdesk" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole') || 'employee';
  const mainNavItems = userRole === 'admin' ? adminNavItems : employeeNavItems;

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-card border-r border-border">
      <div className="flex-1 py-6 px-4">
        {/* Main Navigation */}
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
            Main Menu
          </p>
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  isActive 
                    ? "gradient-primary text-white shadow-glow" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Navigation */}
        <div className="mt-8 space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
            Support
          </p>
          {secondaryNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  isActive 
                    ? "bg-secondary text-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
