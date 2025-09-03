import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertsTable, type Alert } from "@/components/tables/AlertsTable";
import { LayoutShell } from "@/components/layout/AppSidebar";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const kpis = [
  { label: "Frauds Detected Today", value: "42" },
  { label: "High-Risk IPOs", value: "7" },
  { label: "Alerts Escalated", value: "18" },
  { label: "Deepfake Content Flagged", value: "12" },
];

const fraudTrends = Array.from({ length: 12 }).map((_, i) => ({
  month: `M${i + 1}`,
  value: Math.round(40 + Math.random() * 60),
}));
const severityData = [
  { name: "Low", value: 28 },
  { name: "Medium", value: 45 },
  { name: "High", value: 19 },
  { name: "Critical", value: 8 },
];
const typesData = [
  { name: "Pump & Dump", value: 34 },
  { name: "Insider", value: 22 },
  { name: "Scam ICO", value: 17 },
  { name: "Deepfake", value: 27 },
];

const alerts: Alert[] = Array.from({ length: 32 }).map((_, i) => ({
  id: `ALR-${202400 + i}`,
  severity: (["Low", "Medium", "High", "Critical"] as const)[
    Math.floor(Math.random() * 4)
  ],
  source: ["Exchange Feed", "Social", "News", "Filing"][
    Math.floor(Math.random() * 4)
  ],
  entity: ["ABC Advisors", "XYZ Capital", "Omega Labs", "Nova IPO"][
    Math.floor(Math.random() * 4)
  ],
  date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
}));

export default function Dashboard() {
  return (
    <LayoutShell>
      <div className="p-4 md:p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Card key={k.label} className="bg-card/60 border-border/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {k.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold tracking-tight">
                  {k.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle>Fraud Trends</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={fraudTrends} margin={{ left: -20 }}>
                  <defs>
                    <linearGradient id="a" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.7}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="url(#a)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alerts by Severity</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={severityData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--accent))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Fraud Types Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Pie
                    data={typesData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={80}
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="lg:col-span-2">
            <AlertsTable data={alerts} />
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
