import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Clock, MapPin, CheckCircle, XCircle, Coffee } from "lucide-react";

export default function Attendance() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const userName = localStorage.getItem('userName') || 'User';

  const handleCheckIn = () => {
    const now = new Date();
    setCheckInTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    setCheckedIn(true);
  };

  const handleCheckOut = () => {
    setCheckedIn(false);
    setCheckInTime(null);
  };

  // Weekly data
  const weekData = [
    { day: "Mon", status: "present", hours: "8.5h" },
    { day: "Tue", status: "present", hours: "9h" },
    { day: "Wed", status: "present", hours: "8h" },
    { day: "Thu", status: "halfday", hours: "4h" },
    { day: "Fri", status: "present", hours: "8.5h" },
    { day: "Sat", status: "weekend", hours: "-" },
    { day: "Sun", status: "weekend", hours: "-" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present": return "bg-success text-success-foreground";
      case "halfday": return "bg-warning text-warning-foreground";
      case "absent": return "bg-destructive text-destructive-foreground";
      case "weekend": return "bg-secondary text-muted-foreground";
      default: return "bg-secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present": return <CheckCircle className="w-4 h-4" />;
      case "halfday": return <Coffee className="w-4 h-4" />;
      case "absent": return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <Layout userName={userName}>
      <div className="container py-6 px-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-display font-bold">Attendance</h1>
          <p className="text-muted-foreground">Track your daily attendance and work hours</p>
        </div>

        {/* Check In/Out Card */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Time Display */}
            <div className="text-center md:text-left flex-1">
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString("en-US", { 
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
              <p className="text-5xl font-display font-bold mt-2">
                {new Date().toLocaleTimeString("en-US", { 
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              {checkInTime && (
                <p className="text-sm text-muted-foreground mt-2">
                  Checked in at {checkInTime}
                </p>
              )}
            </div>

            {/* Check In/Out Button */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={checkedIn ? handleCheckOut : handleCheckIn}
                className={`w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all shadow-lg ${
                  checkedIn 
                    ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" 
                    : "gradient-primary text-white hover:shadow-glow"
                }`}
              >
                <Clock className="w-8 h-8 mb-2" />
                <span className="font-semibold">{checkedIn ? "Check Out" : "Check In"}</span>
              </button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Office Location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold font-display text-primary">22</p>
            <p className="text-sm text-muted-foreground">Days Present</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold font-display text-warning">2</p>
            <p className="text-sm text-muted-foreground">Half Days</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold font-display text-destructive">1</p>
            <p className="text-sm text-muted-foreground">Absent</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold font-display text-success">95%</p>
            <p className="text-sm text-muted-foreground">Attendance</p>
          </div>
        </div>

        {/* This Week */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg mb-4">This Week</h3>
          <div className="grid grid-cols-7 gap-2">
            {weekData.map((day) => (
              <div key={day.day} className="text-center">
                <p className="text-xs text-muted-foreground mb-2">{day.day}</p>
                <div className={`w-10 h-10 mx-auto rounded-full ${getStatusColor(day.status)} flex items-center justify-center`}>
                  {getStatusIcon(day.status)}
                </div>
                <p className="text-xs font-medium mt-2">{day.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { date: "Today", checkIn: "9:00 AM", checkOut: "-", hours: "Ongoing", status: "present" },
              { date: "Yesterday", checkIn: "8:55 AM", checkOut: "6:30 PM", hours: "9h 35m", status: "present" },
              { date: "Dec 30", checkIn: "9:15 AM", checkOut: "6:00 PM", hours: "8h 45m", status: "present" },
              { date: "Dec 29", checkIn: "9:00 AM", checkOut: "1:00 PM", hours: "4h 0m", status: "halfday" },
            ].map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    entry.status === "present" ? "bg-success" : entry.status === "halfday" ? "bg-warning" : "bg-destructive"
                  }`} />
                  <div>
                    <p className="font-medium">{entry.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {entry.checkIn} - {entry.checkOut}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{entry.hours}</p>
                  <span className={`badge ${entry.status === "present" ? "badge-success" : "badge-warning"}`}>
                    {entry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
