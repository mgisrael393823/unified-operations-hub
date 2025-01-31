import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, Building2, AlertCircle } from "lucide-react";
import { 
  Area, 
  AreaChart, 
  Bar, 
  CartesianGrid, 
  ComposedChart, 
  Legend, 
  Line, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { useToast } from "@/hooks/use-toast";

const projectData = [
  { month: 'Jan', budget: 4000, actual: 2400, variance: 1600 },
  { month: 'Feb', budget: 3000, actual: 2800, variance: 200 },
  { month: 'Mar', budget: 2000, actual: 2200, variance: -200 },
  { month: 'Apr', budget: 2780, actual: 3000, variance: -220 },
  { month: 'May', budget: 1890, actual: 1800, variance: 90 },
  { month: 'Jun', budget: 2390, actual: 2800, variance: -410 },
];

const stats = [
  {
    title: "Active Projects",
    value: "12",
    icon: Building2,
    trend: "+2 this month",
    color: "#0EA5E9" // Ocean Blue
  },
  {
    title: "Team Members",
    value: "24",
    icon: Users,
    trend: "+3 this week",
    color: "#9b87f5" // Primary Purple
  },
  {
    title: "Open Tasks",
    value: "38",
    icon: BarChart,
    trend: "-5 this week",
    color: "#F97316" // Bright Orange
  },
  {
    title: "Critical Alerts",
    value: "7",
    icon: AlertCircle,
    trend: "+2 today",
    color: "#ea384c" // Red
  },
];

export default function Overview() {
  const { toast } = useToast();

  const handleDataPointClick = (data: any) => {
    toast({
      title: "Data Point Details",
      description: `${data.month}: Budget $${data.budget}, Actual $${data.actual}`,
    });
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: stat.color }} />
              <CardContent className="p-6">
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
                  <Icon className="h-8 w-8" style={{ color: stat.color }} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={projectData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                onClick={handleDataPointClick}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="budget" fill="#9b87f5" name="Budget" />
                <Bar dataKey="actual" fill="#0EA5E9" name="Actual" />
                <Line type="monotone" dataKey="variance" stroke="#F97316" name="Variance" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={projectData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="budget" 
                  stackId="1"
                  stroke="#9b87f5"
                  fill="#9b87f5"
                  fillOpacity={0.3}
                  name="Budget"
                />
                <Area 
                  type="monotone" 
                  dataKey="actual" 
                  stackId="1"
                  stroke="#0EA5E9"
                  fill="#0EA5E9"
                  fillOpacity={0.3}
                  name="Actual"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}