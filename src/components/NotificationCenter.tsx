import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  timestamp: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Budget Alert',
    message: 'Project A has exceeded its monthly budget by 15%',
    type: 'warning',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    title: 'New Team Member',
    message: 'Sarah Johnson has joined the development team',
    type: 'info',
    timestamp: '3 hours ago'
  },
  {
    id: '3',
    title: 'Critical System Error',
    message: 'Database synchronization failed for Project B',
    type: 'error',
    timestamp: '5 hours ago'
  }
];

interface NotificationCenterProps {
  open: boolean;
  onClose: () => void;
}

export function NotificationCenter({ open, onClose }: NotificationCenterProps) {
  if (!open) return null;

  return (
    <div className="fixed right-0 top-0 h-screen w-80 bg-background border-l border-border shadow-lg z-50 animate-in slide-in-from-right">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-65px)]">
        <div className="p-4 space-y-4">
          {mockNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border ${
                notification.type === 'error' 
                  ? 'bg-red-50 border-red-200' 
                  : notification.type === 'warning'
                  ? 'bg-yellow-50 border-yellow-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">{notification.title}</h3>
                <span className="text-xs text-muted-foreground">
                  {notification.timestamp}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {notification.message}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}