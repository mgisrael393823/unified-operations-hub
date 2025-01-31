import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { 
  BarChart, Users, Building2, AlertCircle, 
  ChevronDown, ChevronUp, HelpCircle, Bell
} from "lucide-react";
import { 
  Area, AreaChart, Bar, CartesianGrid, ComposedChart, 
  Legend, Line, ResponsiveContainer, Tooltip as RechartsTooltip, 
  XAxis, YAxis 
} from "recharts";
import { useState } from "react";
import { NotificationCenter } from "@/components/NotificationCenter";

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

export default function Overview() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [sections, setSections] = useState({
    projectInsights: true,
    financialMetrics: true
  });

  const handleDataPointClick = (data: any) => {
    toast({
      title: "Data Point Details",
      description: `${data.month}: Budget $${data.budget}, Actual $${data.actual}`,
    });
  };

  const toggleSection = (section: keyof typeof sections) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <TooltipProvider>
      <div className="space-y-6 p-4 md:p-6 relative">
        {/* Notification Toggle */}
        <Button 
          variant="outline" 
          className="fixed right-6 top-20 z-10"
          onClick={() => setNotificationOpen(!notificationOpen)}
        >
          <Bell className="h-4 w-4 mr-2" />
          Notifications
        </Button>

        {/* Notification Sidebar */}
        <NotificationCenter 
          open={notificationOpen} 
          onClose={() => setNotificationOpen(false)} 
        />

        {/* Critical Stats */}
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

        {/* Project Insights Section */}
        <Collapsible 
          open={sections.projectInsights}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              Project Insights
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Detailed overview of project performance and timelines</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" onClick={() => toggleSection('projectInsights')}>
                {sections.projectInsights ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-4">
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
                    <RechartsTooltip />
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
          </CollapsibleContent>
        </Collapsible>

        {/* Financial Metrics Section */}
        <Collapsible 
          open={sections.financialMetrics}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              Financial Metrics
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Financial performance metrics and budget tracking</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" onClick={() => toggleSection('financialMetrics')}>
                {sections.financialMetrics ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-4">
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
                    <RechartsTooltip />
                    <Legend />
                    <Bar dataKey="budget" fill="#9b87f5" name="Budget" />
                    <Bar dataKey="actual" fill="#0EA5E9" name="Actual" />
                    <Line 
                      type="monotone" 
                      dataKey="variance" 
                      stroke="#F97316" 
                      name="Variance" 
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TooltipProvider>
  );
}