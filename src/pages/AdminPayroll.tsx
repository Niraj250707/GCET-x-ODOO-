import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet, Search, Download, Calculator, TrendingUp, AlertCircle } from "lucide-react";

export default function AdminPayroll() {
  const payrollData = [
    {
      id: 1,
      employee: "John Doe",
      email: "john.doe@company.com",
      department: "Engineering",
      baseSalary: 85000,
      bonus: 5000,
      deductions: 1200,
      netSalary: 88800,
      status: "Processed",
      payPeriod: "Jan 2024",
      avatar: ""
    },
    {
      id: 2,
      employee: "Jane Smith",
      email: "jane.smith@company.com",
      department: "Design",
      baseSalary: 70000,
      bonus: 3000,
      deductions: 950,
      netSalary: 72050,
      status: "Processed",
      payPeriod: "Jan 2024",
      avatar: ""
    },
    {
      id: 3,
      employee: "Mike Johnson",
      email: "mike.johnson@company.com",
      department: "Marketing",
      baseSalary: 65000,
      bonus: 2000,
      deductions: 800,
      netSalary: 66200,
      status: "Pending",
      payPeriod: "Jan 2024",
      avatar: ""
    },
    {
      id: 4,
      employee: "Sarah Wilson",
      email: "sarah.wilson@company.com",
      department: "HR",
      baseSalary: 60000,
      bonus: 0,
      deductions: 720,
      netSalary: 59280,
      status: "Processed",
      payPeriod: "Jan 2024",
      avatar: ""
    },
    {
      id: 5,
      employee: "Tom Brown",
      email: "tom.brown@company.com",
      department: "Engineering",
      baseSalary: 75000,
      bonus: 4000,
      deductions: 1100,
      netSalary: 77900,
      status: "Processed",
      payPeriod: "Jan 2024",
      avatar: ""
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processed':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Failed':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const userName = localStorage.getItem('userName') || 'User';

  return (
    <Layout userName={userName}>
      <div className="container py-6 px-4 space-y-6">
        {/* Header */}
        <div className="animate-slide-in-bottom">
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            Payroll Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Process and manage employee payroll and compensation
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">₹3.2M</p>
                  <p className="text-sm text-muted-foreground">Total Payroll</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">148</p>
                  <p className="text-sm text-muted-foreground">Processed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+8.5%</p>
                  <p className="text-sm text-muted-foreground">YoY Growth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search employees..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Pay Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan-2024">January 2024</SelectItem>
                <SelectItem value="dec-2023">December 2023</SelectItem>
                <SelectItem value="nov-2023">November 2023</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="processed">Processed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Process Payroll
            </Button>
          </div>
        </div>

        {/* Payroll Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Base Salary</TableHead>
                  <TableHead>Bonus</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>Net Salary</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback>
                            {employee.employee.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{employee.employee}</p>
                          <p className="text-sm text-muted-foreground">{employee.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>₹{employee.baseSalary.toLocaleString()}</TableCell>
                    <TableCell>₹{employee.bonus.toLocaleString()}</TableCell>
                    <TableCell>₹{employee.deductions.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold">₹{employee.netSalary.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(employee.status)}>
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Payroll Summary */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Breakdown</CardTitle>
              <CardDescription>
                Salary components for January 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Base Salaries</span>
                  <span className="font-semibold">₹2,850,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bonuses</span>
                  <span className="font-semibold">₹140,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overtime</span>
                  <span className="font-semibold">₹85,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Benefits</span>
                  <span className="font-semibold">₹125,000</span>
                </div>
                <div className="border-t pt-4 flex items-center justify-between">
                  <span className="font-medium">Total Gross</span>
                  <span className="font-bold text-lg">₹3,200,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deductions Summary</CardTitle>
              <CardDescription>
                Tax and other deductions breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Income Tax</span>
                  <span className="font-semibold">₹480,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Provident Fund</span>
                  <span className="font-semibold">₹156,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Health Insurance</span>
                  <span className="font-semibold">₹92,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Other Deductions</span>
                  <span className="font-semibold">₹42,000</span>
                </div>
                <div className="border-t pt-4 flex items-center justify-between">
                  <span className="font-medium">Total Deductions</span>
                  <span className="font-bold text-lg">₹770,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Activity</CardTitle>
            <CardDescription>
              Recent payroll processing and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">January 2024 payroll processed successfully</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Salary revision approved for Engineering team</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Bonus payments initiated for Q4 2023</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}