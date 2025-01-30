import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const notificationStats = [
  {
    title: "All Notifications",
    value: "48",
    icon: Bell,
    trend: "Last 30 days",
  },
  {
    title: "Alerts",
    value: "7",
    icon: AlertTriangle,
    trend: "Require attention",
  },
  {
    title: "Completed",
    value: "32",
    icon: CheckCircle,
    trend: "This month",
  },
  {
    title: "Pending",
    value: "9",
    icon: Clock,
    trend: "Awaiting action",
  },
];

const Notifications = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {notificationStats.map((stat) => {
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
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Notification feed will be implemented here
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;