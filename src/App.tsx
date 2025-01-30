import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import Communication from "./pages/Communication";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Integrations from "./pages/Integrations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Overview /></DashboardLayout>} />
          <Route path="/projects" element={<DashboardLayout><Projects /></DashboardLayout>} />
          <Route path="/documents" element={<DashboardLayout><Documents /></DashboardLayout>} />
          <Route path="/communication" element={<DashboardLayout><Communication /></DashboardLayout>} />
          <Route path="/notifications" element={<DashboardLayout><Notifications /></DashboardLayout>} />
          <Route path="/integrations" element={<DashboardLayout><Integrations /></DashboardLayout>} />
          <Route path="/integrations/*" element={
            <DashboardLayout>
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">
                  Individual integration pages are under development
                </p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          <Route
            path="*"
            element={
              <DashboardLayout>
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">
                    This section is under development
                  </p>
                </div>
              </DashboardLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;