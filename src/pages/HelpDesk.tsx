import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, MessageSquare, Clock, CheckCircle, AlertCircle, Search, Plus } from "lucide-react";

export default function HelpDesk() {
  const userRole = localStorage.getItem('userRole') || 'employee';
  const userName = localStorage.getItem('userName') || 'User';

  const tickets = [
    {
      id: 1,
      title: "Unable to access attendance module",
      status: "Open",
      priority: "High",
      category: "Technical Issue",
      createdDate: "2024-01-20",
      lastUpdate: "2 hours ago"
    },
    {
      id: 2,
      title: "Leave request approval delay",
      status: "In Progress",
      priority: "Medium",
      category: "Process",
      createdDate: "2024-01-18",
      lastUpdate: "1 day ago"
    },
    {
      id: 3,
      title: "Payroll calculation error",
      status: "Resolved",
      priority: "High",
      category: "Payroll",
      createdDate: "2024-01-15",
      lastUpdate: "3 days ago"
    },
    {
      id: 4,
      title: "Password reset issue",
      status: "Resolved",
      priority: "Low",
      category: "Account",
      createdDate: "2024-01-12",
      lastUpdate: "1 week ago"
    }
  ];

  const faqs = [
    {
      question: "How do I submit a leave request?",
      answer: "Navigate to the Leave section, click 'New Request', fill in the required details, and submit for approval."
    },
    {
      question: "How can I update my profile information?",
      answer: "Go to Profile settings, update your information, and click 'Update Profile' to save changes."
    },
    {
      question: "What should I do if I forget my password?",
      answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email."
    },
    {
      question: "How do I check my attendance records?",
      answer: "Visit the Attendance section to view your daily check-in/check-out times and attendance summary."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'In Progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'destructive';
      case 'In Progress':
        return 'default';
      case 'Resolved':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Layout userName={userName}>
      <div className="container py-6 px-4 space-y-6">
        {/* Header */}
        <div className="animate-slide-in-bottom">
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            Help Desk
          </h1>
          <p className="text-muted-foreground mt-1">
            Get support and submit help requests
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Support Tickets */}
          <div className="lg:col-span-2 space-y-6">
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search tickets..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Ticket
              </Button>
            </div>

            {/* Tickets List */}
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <Card key={ticket.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        {getStatusIcon(ticket.status)}
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{ticket.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span>Ticket #{ticket.id}</span>
                            <span>•</span>
                            <span>{ticket.createdDate}</span>
                            <span>•</span>
                            <span>Updated {ticket.lastUpdate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={getStatusColor(ticket.status)}>
                              {ticket.status}
                            </Badge>
                            <Badge variant={getPriorityColor(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                            <Badge variant="outline">{ticket.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Create New Ticket */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Create New Ticket
                </CardTitle>
                <CardDescription>
                  Need help? Submit a support request
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="account">Account</SelectItem>
                      <SelectItem value="payroll">Payroll</SelectItem>
                      <SelectItem value="leave">Leave</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about your issue..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">Submit Ticket</Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All FAQs
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium">Email:</span>
                  <span>support@dayflow.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium">Phone:</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium">Hours:</span>
                  <span>Mon-Fri 9AM-6PM PST</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}