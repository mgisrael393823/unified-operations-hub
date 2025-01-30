import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FolderOpen, Upload, Download } from "lucide-react";

const documentStats = [
  {
    title: "Total Documents",
    value: "1,234",
    icon: FileText,
    trend: "+34 this week",
  },
  {
    title: "Active Folders",
    value: "56",
    icon: FolderOpen,
    trend: "Across 8 projects",
  },
  {
    title: "Uploads",
    value: "89",
    icon: Upload,
    trend: "Last 7 days",
  },
  {
    title: "Downloads",
    value: "156",
    icon: Download,
    trend: "Last 7 days",
  },
];

const Documents = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {documentStats.map((stat) => {
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
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Document list and management interface will be implemented here
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;