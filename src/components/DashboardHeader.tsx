import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Welcome back</h2>
        <p className="text-sm text-gray-600">Here's what's happening today</p>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
          LG
        </div>
      </div>
    </header>
  );
}