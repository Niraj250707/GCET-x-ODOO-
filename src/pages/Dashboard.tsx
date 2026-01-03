import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { LeaveBalance } from "@/components/dashboard/LeaveBalance";
import { UpcomingSchedule } from "@/components/dashboard/UpcomingSchedule";
import { CommunityPreview } from "@/components/dashboard/CommunityPreview";
import { Clock, Calendar, Wallet, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout userName="Ravi Kumar">
      <div className="container py-6 px-4 space-y-6">
        {/* Welcome Section */}
        <div className="animate-slide-in-bottom">
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            Welcome back, <span className="text-gradient">Ravi!</span> 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your HR activities today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Attendance"
            value="95%"
            subtitle="This month"
            icon={<Clock className="w-6 h-6" />}
            trend={{ value: 2.5, isPositive: true }}
            variant="primary"
          />
          <StatCard
            title="Leave Balance"
            value="20"
            subtitle="Days remaining"
            icon={<Calendar className="w-6 h-6" />}
            variant="success"
          />
          <StatCard
            title="Net Salary"
            value="₹45K"
            subtitle="This month"
            icon={<Wallet className="w-6 h-6" />}
            trend={{ value: 5, isPositive: true }}
            variant="warning"
          />
          <StatCard
            title="Performance"
            value="A+"
            subtitle="Current rating"
            icon={<TrendingUp className="w-6 h-6" />}
            variant="purple"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <AttendanceChart />
          <LeaveBalance />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <UpcomingSchedule />
          <CommunityPreview />
        </div>
      </div>
    </Layout>
  );
}
