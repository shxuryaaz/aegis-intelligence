import { LayoutShell } from "@/components/layout/AppSidebar";

export default function ScannerPage() {
  return (
    <LayoutShell>
      <div className="p-6">
        <div className="rounded-lg border bg-card p-8 text-muted-foreground">
          Fraud Scanner will allow uploads (text/PDF/audio/video/URL) to Supabase Storage and scan via /scan/* APIs. Ask to implement next.
        </div>
      </div>
    </LayoutShell>
  );
}
