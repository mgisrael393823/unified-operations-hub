import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  AlertCircle, Building2, Users, BarChart,
  FileText, Calendar, Bell, ChevronRight
} from "lucide-react";
import { 
  Area, AreaChart, CartesianGrid, ResponsiveContainer, 
  Tooltip as RechartsTooltip, XAxis, YAxis, Legend 
} from "recharts";

const projectData = [
  { month: 'Jan', budget: 4000000, actual: 3800000 },
  { month: 'Feb', budget: 3500000, actual: 3200000 },
  { month: 'Mar', budget: 3000000, actual: 3100000 },
  { month: 'Apr', budget: 2780000, actual: 2900000 },
  { month: 'May', budget: 2890000, actual: 2700000 },
  { month: 'Jun', budget: 2390000, actual: 2800000 },
];

const stats = [
  {
    title: "Critical Alerts",
    value: "7",
    icon: AlertCircle,
    trend: "+2 today",
    color: "#ea384c",
    description: "Urgent matters requiring immediate attention"
  },
  {
    title: "Active Projects",
    value: "12",
    icon: Building2,
    trend: "+2 this month",
    color: "#0EA5E9",
    description: "Currently ongoing projects across all departments"
  },
  {
    title: "Team Members",
    value: "24",
    icon: Users,
    trend: "+3 this week",
    color: "#9b87f5",
    description: "Total number of active team members"
  },
  {
    title: "Financial Overview",
    value: "$2.4M",
    icon: BarChart,
    trend: "+5% vs last month",
    color: "#F97316",
    description: "Current financial standing across all projects"
  },
];

const recentActivities = [
  {
    id: 1,
    title: "Budget Update Required",
    description: "Project A requires budget revision",
    type: "alert",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "New Document Uploaded",
    description: "Construction plans for Project B",
    type: "document",
    time: "4 hours ago"
  },
  {
    id: 3,
    title: "Meeting Scheduled",
    description: "Team sync for Project C",
    type: "calendar",
    time: "Yesterday"
  }
];

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Operations Dashboard</h1>
              <p className="text-gray-500">Welcome back to your project overview</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Tooltip key={stat.title}>
                  <TooltipTrigger asChild>
                    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                      <div 
                        className="absolute top-0 right-0 w-2 h-full" 
                        style={{ backgroundColor: stat.color }} 
                      />
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{stat.description}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Financial Overview Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={projectData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis 
                        tickFormatter={(value) => 
                          new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(value)
                        }
                      />
                      <RechartsTooltip 
                        formatter={(value: number) => 
                          new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(value)
                        }
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="budget"
                        stackId="1"
                        stroke="#0EA5E9"
                        fill="#0EA5E9"
                        fillOpacity={0.3}
                        name="Budget"
                      />
                      <Area
                        type="monotone"
                        dataKey="actual"
                        stackId="1"
                        stroke="#F97316"
                        fill="#F97316"
                        fillOpacity={0.3}
                        name="Actual"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {activity.type === 'alert' && (
                        <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                      )}
                      {activity.type === 'document' && (
                        <FileText className="h-5 w-5 text-blue-500 mt-1" />
                      )}
                      {activity.type === 'calendar' && (
                        <Calendar className="h-5 w-5 text-purple-500 mt-1" />
                      )}
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Index;