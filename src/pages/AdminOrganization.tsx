import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, Users, MapPin, Phone, Mail, Globe, Edit, Plus } from "lucide-react";

export default function AdminOrganization() {
  const departments = [
    {
      id: 1,
      name: "Engineering",
      head: "John Doe",
      employees: 71,
      budget: "₹45,00,000",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Design",
      head: "Jane Smith",
      employees: 39,
      budget: "₹28,00,000",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      name: "Marketing",
      head: "Mike Johnson",
      employees: 23,
      budget: "₹18,00,000",
      location: "New York, NY"
    },
    {
      id: 4,
      name: "Human Resources",
      head: "Sarah Wilson",
      employees: 16,
      budget: "₹12,00,000",
      location: "San Francisco, CA"
    },
    {
      id: 5,
      name: "Finance",
      head: "Tom Brown",
      employees: 7,
      budget: "₹8,00,000",
      location: "San Francisco, CA"
    }
  ];

  const locations = [
    {
      id: 1,
      name: "Headquarters - San Francisco",
      address: "123 Tech Street, San Francisco, CA 94102",
      employees: 132,
      manager: "John Doe",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      name: "Branch Office - New York",
      address: "456 Business Ave, New York, NY 10001",
      employees: 23,
      manager: "Mike Johnson",
      phone: "+1 (555) 987-6543"
    },
    {
      id: 3,
      name: "Remote Workers",
      address: "Various locations worldwide",
      employees: 1,
      manager: "Sarah Wilson",
      phone: "N/A"
    }
  ];

  const userName = localStorage.getItem('userName') || 'User';

  return (
    <Layout userName={userName}>
      <div className="container py-6 px-4 space-y-6">
        {/* Header */}
        <div className="animate-slide-in-bottom">
          <h1 className="text-2xl md:text-3xl font-display font-bold">
            Organization Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage company structure, departments, and locations
          </p>
        </div>

        {/* Company Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              Company Information
            </CardTitle>
            <CardDescription>
              Basic company details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" defaultValue="Dayflow Technologies Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="technology">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://dayflow.com" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="founded">Founded Year</Label>
                  <Input id="founded" defaultValue="2020" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50)</SelectItem>
                      <SelectItem value="small">Small (51-200)</SelectItem>
                      <SelectItem value="medium">Medium (201-1000)</SelectItem>
                      <SelectItem value="large">Large (1000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="pst">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Pacific Standard Time</SelectItem>
                      <SelectItem value="est">Eastern Standard Time</SelectItem>
                      <SelectItem value="cst">Central Standard Time</SelectItem>
                      <SelectItem value="mst">Mountain Standard Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Company Description</Label>
              <Textarea
                id="description"
                defaultValue="Dayflow Technologies is a modern HR management platform that streamlines workforce management, payroll processing, and employee engagement for growing companies."
                rows={3}
              />
            </div>
            <Button>
              <Edit className="w-4 h-4 mr-2" />
              Update Company Info
            </Button>
          </CardContent>
        </Card>

        {/* Departments */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Departments</CardTitle>
                <CardDescription>
                  Manage organizational departments and structure
                </CardDescription>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Department
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {departments.map((dept) => (
                <div key={dept.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{dept.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>Head: {dept.head}</span>
                        <span>•</span>
                        <span>{dept.employees} employees</span>
                        <span>•</span>
                        <span>{dept.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold">{dept.budget}</p>
                      <p className="text-sm text-muted-foreground">Annual Budget</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Locations */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Office Locations
                </CardTitle>
                <CardDescription>
                  Manage company office locations and facilities
                </CardDescription>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Location
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {locations.map((location) => (
                <div key={location.id} className="p-6 border rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{location.name}</h3>
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                    <Badge variant="outline">{location.employees} employees</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Manager: {location.manager}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{location.phone}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Organization Hierarchy */}
        <Card>
          <CardHeader>
            <CardTitle>Organization Hierarchy</CardTitle>
            <CardDescription>
              Visual representation of company structure and reporting lines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Organization Chart</h3>
              <p className="text-muted-foreground mb-4">
                Interactive organization chart will be displayed here
              </p>
              <Button variant="outline">
                View Full Chart
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Policies & Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Company Policies</CardTitle>
            <CardDescription>
              Manage company policies, guidelines, and procedures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Employee Handbook</h4>
                    <p className="text-sm text-muted-foreground">Last updated: Jan 15, 2025</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Code of Conduct</h4>
                    <p className="text-sm text-muted-foreground">Last updated: Dec 20, 2024</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Remote Work Policy</h4>
                    <p className="text-sm text-muted-foreground">Last updated: Nov 10, 2024</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add New Policy
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}