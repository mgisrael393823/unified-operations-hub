import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { 
  MessageSquare, Users, Calendar as CalendarIcon, Mail, 
  ChevronDown, ChevronUp, MessageCircle, Phone, Video,
  Check, Reply, ExternalLink
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const communicationStats = [
  {
    title: "Active Chats",
    value: "12",
    icon: MessageSquare,
    trend: "3 unread messages",
    color: "bg-blue-500",
    description: "Active conversations across Teams and internal chat"
  },
  {
    title: "Team Members",
    value: "24",
    icon: Users,
    trend: "4 online now",
    color: "bg-purple-500",
    description: "Project team members and stakeholders"
  },
  {
    title: "Meetings Today",
    value: "5",
    icon: CalendarIcon,
    trend: "2 pending approvals",
    color: "bg-orange-500",
    description: "Scheduled meetings and video calls"
  },
  {
    title: "Email Threads",
    value: "18",
    icon: Mail,
    trend: "7 need response",
    color: "bg-red-500",
    description: "Active email conversations requiring attention"
  },
];

const recentMessages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    title: "Budget Review Meeting Notes",
    preview: "I've attached the updated cost estimates for the west wing expansion...",
    timestamp: "10:30 AM",
    unread: true,
    type: "email"
  },
  {
    id: 2,
    sender: "Project Team",
    title: "Site Progress Update",
    preview: "Foundation work is ahead of schedule. Contractor confirmed delivery...",
    timestamp: "9:15 AM",
    unread: true,
    type: "chat"
  },
  {
    id: 3,
    sender: "Mike Chen",
    title: "Vendor Payment Approval",
    preview: "Need your sign-off on the latest invoice from...",
    timestamp: "Yesterday",
    unread: false,
    type: "email"
  }
];

const upcomingMeetings = [
  {
    id: 1,
    title: "Weekly Project Status",
    time: "11:00 AM",
    duration: "1 hour",
    attendees: ["Sarah J.", "Mike C.", "+6 others"],
    type: "video",
    project: "West Wing Expansion"
  },
  {
    id: 2,
    title: "Vendor Review",
    time: "2:30 PM",
    duration: "45 min",
    attendees: ["John D.", "Lisa M.", "+3 others"],
    type: "call",
    project: "Main Building Renovation"
  }
];

const quickActions = [
  {
    title: "Start Chat",
    icon: MessageCircle,
    action: () => toast({
      title: "Starting new chat",
      description: "Opening Teams integration..."
    })
  },
  {
    title: "Schedule Call",
    icon: Phone,
    action: () => toast({
      title: "Schedule Call",
      description: "Opening calendar scheduler..."
    })
  },
  {
    title: "Video Meeting",
    icon: Video,
    action: () => toast({
      title: "New Video Meeting",
      description: "Creating Teams meeting link..."
    })
  },
];

const Communication = () => {
  const [sections, setSections] = useState({
    messages: true,
    meetings: true,
    calendar: true
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <TooltipProvider>
      <div className="space-y-6 p-4 md:p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communicationStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`absolute top-0 right-0 w-2 h-full ${stat.color}`} />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-xs text-muted-foreground cursor-help">{stat.trend}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">{stat.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 flex-wrap">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.title}
                onClick={action.action}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {action.title}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Messages */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Recent Messages</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleSection("messages")}
              >
                {sections.messages ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CardHeader>
            <Collapsible open={sections.messages}>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`p-4 rounded-lg border ${
                          message.unread ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <h4 className="font-medium">{message.sender}</h4>
                            <p className="text-sm text-muted-foreground">
                              {message.title}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {message.timestamp}
                          </span>
                        </div>
                        <p className="text-sm mb-2">{message.preview}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Reply className="h-4 w-4 mr-1" /> Reply
                          </Button>
                          {message.unread && (
                            <Button variant="ghost" size="sm">
                              <Check className="h-4 w-4 mr-1" /> Mark as Read
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Collapsible>
          </Card>

          {/* Upcoming Meetings */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Upcoming Meetings</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleSection("meetings")}
              >
                {sections.meetings ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CardHeader>
            <Collapsible open={sections.meetings}>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-4">
                    {upcomingMeetings.map((meeting) => (
                      <div
                        key={meeting.id}
                        className="p-4 rounded-lg border hover:shadow-sm transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{meeting.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {meeting.project}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            {meeting.type === "video" ? (
                              <Video className="h-4 w-4 mr-1" />
                            ) : (
                              <Phone className="h-4 w-4 mr-1" />
                            )}
                            Join
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{meeting.time}</span>
                          <span>•</span>
                          <span>{meeting.duration}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {meeting.attendees.map((attendee, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-xs"
                            >
                              {attendee}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Collapsible>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Communication;