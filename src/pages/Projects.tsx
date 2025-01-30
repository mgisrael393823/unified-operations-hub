import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, AlertCircle, CheckCircle2 } from "lucide-react";

const projectStats = [
  {
    title: "Active Projects",
    value: "8",
    icon: Building2,
    trend: "2 completing next month",
  },
  {
    title: "On Schedule",
    value: "6",
    icon: Clock,
    trend: "75% of projects",
  },
  {
    title: "At Risk",
    value: "2",
    icon: AlertCircle,
    trend: "Budget overruns",
  },
  {
    title: "Completed",
    value: "15",
    icon: CheckCircle2,
    trend: "This year",
  },
];

const Projects = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectStats.map((stat) => {
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
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Project timeline visualization will be implemented here
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;