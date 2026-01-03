import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Salary from "./pages/Salary";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Documents from "./pages/Documents";
import HelpDesk from "./pages/HelpDesk";
import Settings from "./pages/Settings";
import AdminEmployees from "./pages/AdminEmployees";
import AdminLeaves from "./pages/AdminLeaves";
import AdminPayroll from "./pages/AdminPayroll";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminOrganization from "./pages/AdminOrganization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="dayflow-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/helpdesk" element={<HelpDesk />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin/employees" element={<AdminEmployees />} />
            <Route path="/admin/leaves" element={<AdminLeaves />} />
            <Route path="/admin/payroll" element={<AdminPayroll />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/organization" element={<AdminOrganization />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
