import { LayoutShell } from "@/components/layout/AppSidebar";

export default function ReportsPage() {
  return (
    <LayoutShell>
      <div className="p-6">
        <div className="rounded-lg border bg-card p-8 text-muted-foreground">
          Reports will generate downloadable PDF summaries of alerts and cases.
          Ask to implement next.
        </div>
      </div>
    </LayoutShell>
  );
}
