import { LayoutShell } from "@/components/layout/AppSidebar";

export default function VerifyPage() {
  return (
    <LayoutShell>
      <div className="p-6">
        <div className="rounded-lg border bg-card p-8 text-muted-foreground">
          Advisor/IPO Verification will query /verify/advisor and /verify/ipo
          and display validity with confidence and registry details. Ask to
          implement next.
        </div>
      </div>
    </LayoutShell>
  );
}
