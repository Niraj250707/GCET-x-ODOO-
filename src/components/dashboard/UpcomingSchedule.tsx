import { Calendar, Clock, Video, Users } from "lucide-react";

const scheduleItems = [
  {
    id: 1,
    title: "Team Standup",
    time: "10:00 AM",
    type: "meeting",
    icon: Video,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Project Review",
    time: "2:00 PM",
    type: "meeting",
    icon: Users,
    color: "bg-success/10 text-success",
  },
  {
    id: 3,
    title: "Submit Report",
    time: "5:00 PM",
    type: "deadline",
    icon: Clock,
    color: "bg-warning/10 text-warning",
  },
];

export function UpcomingSchedule() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-lg">Today's Schedule</h3>
          <p className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("en-US", { 
              weekday: "long",
              month: "short",
              day: "numeric"
            })}
          </p>
        </div>
        <button className="p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
          <Calendar className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {scheduleItems.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors animate-slide-in-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
              <item.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.time}</p>
            </div>
            <span className="badge badge-primary capitalize">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
