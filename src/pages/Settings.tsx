import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Bell, Monitor } from "lucide-react";

const settingsSections = [
  {
    title: "Profile Settings",
    icon: User,
    description: "Manage your account information and preferences",
  },
  {
    title: "Security",
    icon: Lock,
    description: "Configure your security settings and permissions",
  },
  {
    title: "Notifications",
    icon: Bell,
    description: "Customize your notification preferences",
  },
  {
    title: "Display",
    icon: Monitor,
    description: "Adjust the appearance and layout settings",
  },
];

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.title} className="cursor-pointer hover:bg-accent/50">
              <CardHeader className="flex flex-row items-center space-y-0">
                <Icon className="h-5 w-5 mr-4 text-primary" />
                <div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {section.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Settings interface will be implemented here
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;