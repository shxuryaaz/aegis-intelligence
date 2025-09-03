import { LayoutShell } from "@/components/layout/AppSidebar";

export default function CasesPage() {
  return (
    <LayoutShell>
      <div className="p-6">
        <div className="rounded-lg border bg-card p-8 text-muted-foreground">
          Cases will provide a Kanban board (OPEN, TRIAGED, IN_REVIEW,
          ESCALATED, RESOLVED) and case details with timeline/comments/evidence.
          Ask to implement next.
        </div>
      </div>
    </LayoutShell>
  );
}
