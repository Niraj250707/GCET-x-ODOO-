import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { LeaveBalance } from "@/components/dashboard/LeaveBalance";
import { UpcomingSchedule } from "@/components/dashboard/UpcomingSchedule";
import { CommunityPreview } from "@/components/dashboard/CommunityPreview";
import { Users, FileText, TrendingUp, AlertTriangle, Clock, Calendar, Wallet } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'User';
  const firstName = userName.split(' ')[0];

  return (
    <Layout userName={userName}>
      <div className="container py-6 px-4 space-y-6">
        {/* Welcome Section */}
        <div className="animate-slide-in-bottom">
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            Welcome back, <span className="text-gradient">{firstName}!</span> 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your organization's HR activities and team performance.
          </p>
        </div>

        {/* Admin Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Employees"
            value="156"
            subtitle="Active staff"
            icon={<Users className="w-6 h-6" />}
            trend={{ value: 8, isPositive: true }}
            variant="primary"
          />
          <StatCard
            title="Pending Requests"
            value="23"
            subtitle="Leave & approvals"
            icon={<FileText className="w-6 h-6" />}
            variant="warning"
          />
          <StatCard
            title="Avg Attendance"
            value="92%"
            subtitle="This month"
            icon={<Clock className="w-6 h-6" />}
            trend={{ value: 1.2, isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Open Positions"
            value="8"
            subtitle="Job vacancies"
            icon={<TrendingUp className="w-6 h-6" />}
            variant="purple"
          />
        </div>

        {/* Admin Quick Actions */}
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => navigate('/admin/employees')}
              className="btn-secondary flex flex-col items-center gap-2 p-4 hover:bg-primary/5"
            >
              <Users className="w-6 h-6" />
              <span className="text-sm">Manage Employees</span>
            </button>
            <button
              onClick={() => navigate('/admin/leaves')}
              className="btn-secondary flex flex-col items-center gap-2 p-4 hover:bg-primary/5"
            >
              <FileText className="w-6 h-6" />
              <span className="text-sm">Review Requests</span>
            </button>
            <button
              onClick={() => navigate('/admin/analytics')}
              className="btn-secondary flex flex-col items-center gap-2 p-4 hover:bg-primary/5"
            >
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Schedule Management</span>
            </button>
            <button
              onClick={() => navigate('/admin/payroll')}
              className="btn-secondary flex flex-col items-center gap-2 p-4 hover:bg-primary/5"
            >
              <Wallet className="w-6 h-6" />
              <span className="text-sm">Payroll Overview</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">John Doe submitted leave request</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New employee onboarded</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payroll processed for March</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-lg font-semibold mb-4">System Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Pending Approvals</p>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">12 leave requests awaiting approval</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Monthly Report Due</p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">HR analytics report due in 3 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <AttendanceChart />
          <LeaveBalance />
        </div>
      </div>
    </Layout>
  );
}