import { Card } from "@/components/ui/card";
import { BarChart, Users, Building2, AlertCircle } from "lucide-react";

const stats = [
  {
    title: "Active Projects",
    value: "12",
    icon: Building2,
    trend: "+2 this month",
  },
  {
    title: "Team Members",
    value: "24",
    icon: Users,
    trend: "+3 this week",
  },
  {
    title: "Open Tasks",
    value: "38",
    icon: BarChart,
    trend: "-5 this week",
  },
  {
    title: "Pending Approvals",
    value: "7",
    icon: AlertCircle,
    trend: "+2 today",
  },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.trend}
                  </p>
                </div>
                <Icon className="h-8 w-8 text-primary opacity-80" />
              </div>
            </Card>
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Placeholder for activity feed
            </p>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Project Timeline</h3>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Placeholder for timeline visualization
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}