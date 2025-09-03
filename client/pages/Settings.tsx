import { LayoutShell } from "@/components/layout/AppSidebar";

export default function SettingsPage() {
  return (
    <LayoutShell>
      <div className="p-6">
        <div className="rounded-lg border bg-card p-8 text-muted-foreground">
          Settings will include policy weight editor (YAML), API key manager,
          and audit log viewer. Ask to implement next.
        </div>
      </div>
    </LayoutShell>
  );
}
