import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { 
  Bell, AlertTriangle, CheckCircle, Clock,
  MessageSquare, FileText, Calendar, ChevronRight
} from "lucide-react";
import { useState } from "react";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'alert' | 'message' | 'document' | 'calendar';
  timestamp: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Budget Alert',
    message: 'Project A has exceeded its monthly budget by 15%',
    type: 'alert',
    timestamp: '2 hours ago',
    read: false
  },
  {
    id: '2',
    title: 'New Document Shared',
    message: 'Sarah Johnson shared "Q1 Financial Report.pdf"',
    type: 'document',
    timestamp: '3 hours ago',
    read: false
  },
  {
    id: '3',
    title: 'Meeting Reminder',
    message: 'Team sync for Project B starts in 30 minutes',
    type: 'calendar',
    timestamp: '30 minutes ago',
    read: false
  },
  {
    id: '4',
    title: 'New Message',
    message: 'John Smith commented on Project C timeline',
    type: 'message',
    timestamp: '1 hour ago',
    read: true
  }
];

const notificationStats = [
  {
    title: "All Notifications",
    value: "48",
    icon: Bell,
    trend: "Last 30 days",
    description: "Total notifications across all channels"
  },
  {
    title: "Alerts",
    value: "7",
    icon: AlertTriangle,
    trend: "Require attention",
    description: "Critical updates requiring immediate action"
  },
  {
    title: "Completed",
    value: "32",
    icon: CheckCircle,
    trend: "This month",
    description: "Resolved notifications and acknowledgments"
  },
  {
    title: "Pending",
    value: "9",
    icon: Clock,
    trend: "Awaiting action",
    description: "Notifications pending your review"
  },
];

const getNotificationIcon = (type: Notification['type']) => {
  switch (type) {
    case 'alert':
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    case 'message':
      return <MessageSquare className="h-5 w-5 text-blue-500" />;
    case 'document':
      return <FileText className="h-5 w-5 text-green-500" />;
    case 'calendar':
      return <Calendar className="h-5 w-5 text-purple-500" />;
  }
};

const Notifications = () => {
  const [filter, setFilter] = useState<Notification['type'] | 'all'>('all');

  const filteredNotifications = mockNotifications.filter(
    notification => filter === 'all' || notification.type === filter
  );

  return (
    <div className="space-y-6 p-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {notificationStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
                <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Notification Filters */}
      <div className="flex space-x-2">
        <Button 
          variant={filter === 'all' ? "default" : "outline"}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button 
          variant={filter === 'alert' ? "default" : "outline"}
          onClick={() => setFilter('alert')}
        >
          Alerts
        </Button>
        <Button 
          variant={filter === 'message' ? "default" : "outline"}
          onClick={() => setFilter('message')}
        >
          Messages
        </Button>
        <Button 
          variant={filter === 'document' ? "default" : "outline"}
          onClick={() => setFilter('document')}
        >
          Documents
        </Button>
        <Button 
          variant={filter === 'calendar' ? "default" : "outline"}
          onClick={() => setFilter('calendar')}
        >
          Calendar
        </Button>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`
                    flex items-start space-x-4 p-4 rounded-lg
                    ${notification.read ? 'bg-gray-50' : 'bg-blue-50'}
                    hover:bg-gray-100 transition-colors
                  `}
                >
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium ${!notification.read && 'font-semibold'}`}>
                        {notification.title}
                      </p>
                      <span className="text-xs text-gray-500">
                        {notification.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {notification.message}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;