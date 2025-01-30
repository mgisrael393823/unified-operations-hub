import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const integrations = [
  { id: "northspyre", name: "Northspyre", path: "/integrations/northspyre" },
  { id: "procore", name: "Procore", path: "/integrations/procore" },
  { id: "sage", name: "Sage", path: "/integrations/sage" },
  { id: "hubspot", name: "HubSpot", path: "/integrations/hubspot" },
  { id: "teams", name: "Microsoft Teams", path: "/integrations/teams" },
  { id: "office365", name: "Office 365", path: "/integrations/office365" },
  { id: "onedrive", name: "OneDrive", path: "/integrations/onedrive" },
  { id: "sharefile", name: "ShareFile", path: "/integrations/sharefile" },
];

export default function Integrations() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-sm">
            <Select onValueChange={(value) => navigate(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select an integration" />
              </SelectTrigger>
              <SelectContent>
                {integrations.map((integration) => (
                  <SelectItem key={integration.id} value={integration.path}>
                    {integration.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}