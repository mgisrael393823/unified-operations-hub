import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, Mail } from "lucide-react";

const communicationStats = [
  {
    title: "Active Chats",
    value: "12",
    icon: MessageSquare,
    trend: "3 unread messages",
  },
  {
    title: "Team Members",
    value: "24",
    icon: Users,
    trend: "4 online now",
  },
  {
    title: "Meetings Today",
    value: "5",
    icon: Calendar,
    trend: "2 pending",
  },
  {
    title: "Email Threads",
    value: "18",
    icon: Mail,
    trend: "7 need response",
  },
];

const Communication = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communicationStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Message list will be implemented here
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Calendar integration will be implemented here
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Communication;