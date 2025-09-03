import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge, BarChart2, FileText, FolderKanban, Home, Layers3, ScanLine, Settings, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const current = location.pathname;

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="bg-sidebar text-sidebar-foreground">
        <SidebarHeader className="h-14 px-2 flex items-center">
          <div className="text-sm font-medium tracking-wide text-sidebar-foreground/80">
            Aegis Intelligence
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[
                  { to: "/", label: "Dashboard", icon: Home },
                  { to: "/scanner", label: "Fraud Scanner", icon: ScanLine },
                  { to: "/verify", label: "Advisor/IPO Verification", icon: Badge },
                  { to: "/alerts", label: "Alerts", icon: ShieldAlert },
                  { to: "/cases", label: "Cases", icon: FolderKanban },
                  { to: "/reports", label: "Reports", icon: FileText },
                  { to: "/settings", label: "Settings", icon: Settings },
                ].map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild isActive={current === item.to} tooltip={item.label}>
                      <Link to={item.to} className={cn("", current === item.to && "text-sidebar-primary") }>
                        <item.icon className="mr-2" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Analytics</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Trends">
                    <Link to="/" className="">
                      <BarChart2 className="mr-2" />
                      <span>Trends</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Modules">
                    <Link to="/" className="">
                      <Layers3 className="mr-2" />
                      <span>Modules</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="text-xs text-sidebar-foreground/60 px-1">SEBI Hackathon Build</div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <TopbarContainer />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
