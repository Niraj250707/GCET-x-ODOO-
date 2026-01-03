import { Layout } from "@/components/layout/Layout";
import { Wallet, Download, TrendingUp, Calendar, FileText } from "lucide-react";

const salaryBreakdown = [
  { label: "Basic Salary", amount: 30000, type: "earning" },
  { label: "House Rent Allowance", amount: 12000, type: "earning" },
  { label: "Travel Allowance", amount: 5000, type: "earning" },
  { label: "Special Allowance", amount: 8000, type: "earning" },
  { label: "Provident Fund", amount: 3600, type: "deduction" },
  { label: "Professional Tax", amount: 200, type: "deduction" },
  { label: "Income Tax", amount: 2200, type: "deduction" },
];

const payslipHistory = [
  { month: "December 2024", net: 49000, status: "paid", date: "Dec 1, 2024" },
  { month: "November 2024", net: 49000, status: "paid", date: "Nov 1, 2024" },
  { month: "October 2024", net: 48000, status: "paid", date: "Oct 1, 2024" },
  { month: "September 2024", net: 48000, status: "paid", date: "Sep 1, 2024" },
];

export default function Salary() {
  const totalEarnings = salaryBreakdown.filter(s => s.type === "earning").reduce((a, b) => a + b.amount, 0);
  const totalDeductions = salaryBreakdown.filter(s => s.type === "deduction").reduce((a, b) => a + b.amount, 0);
  const netSalary = totalEarnings - totalDeductions;

  return (
    <Layout userName="Ravi Kumar">
      <div className="container py-6 px-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">Salary & Payroll</h1>
            <p className="text-muted-foreground">View your salary details and payslips</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">Download Payslip</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-5 border-l-4 border-l-success">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Gross Salary</p>
            <p className="text-2xl font-bold font-display mt-1">₹{totalEarnings.toLocaleString()}</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border-l-4 border-l-destructive">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-destructive" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Deductions</p>
            <p className="text-2xl font-bold font-display mt-1">₹{totalDeductions.toLocaleString()}</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border-l-4 border-l-primary col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Net Salary (Take Home)</p>
            <p className="text-3xl font-bold font-display mt-1 text-gradient">₹{netSalary.toLocaleString()}</p>
          </div>
        </div>

        {/* Salary Breakdown */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg mb-4">Salary Breakdown - January 2025</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Earnings */}
            <div>
              <h4 className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Earnings
              </h4>
              <div className="space-y-3">
                {salaryBreakdown.filter(s => s.type === "earning").map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-success/5">
                    <span className="text-sm">{item.label}</span>
                    <span className="font-semibold">₹{item.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-3 rounded-xl bg-success/10 font-semibold">
                  <span>Total Earnings</span>
                  <span className="text-success">₹{totalEarnings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div>
              <h4 className="text-sm font-semibold text-destructive mb-3 flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Deductions
              </h4>
              <div className="space-y-3">
                {salaryBreakdown.filter(s => s.type === "deduction").map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-destructive/5">
                    <span className="text-sm">{item.label}</span>
                    <span className="font-semibold">- ₹{item.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-3 rounded-xl bg-destructive/10 font-semibold">
                  <span>Total Deductions</span>
                  <span className="text-destructive">₹{totalDeductions.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payslip History */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg mb-4">Payslip History</h3>
          <div className="space-y-3">
            {payslipHistory.map((slip, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-secondary/50 gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{slip.month}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Paid on {slip.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-lg">₹{slip.net.toLocaleString()}</p>
                    <span className="badge badge-success capitalize">{slip.status}</span>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tax Summary */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg mb-4">FY 2024-25 Tax Summary</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <p className="text-sm text-muted-foreground">Total Income</p>
              <p className="text-xl font-bold mt-1">₹6,60,000</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <p className="text-sm text-muted-foreground">Standard Deduction</p>
              <p className="text-xl font-bold mt-1">₹50,000</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <p className="text-sm text-muted-foreground">Tax Paid (YTD)</p>
              <p className="text-xl font-bold mt-1">₹22,000</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <p className="text-sm text-muted-foreground">Tax Remaining</p>
              <p className="text-xl font-bold mt-1">₹6,600</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
