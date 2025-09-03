import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavBar } from "@/components/marketing/NavBar";
import { motion } from "framer-motion";
import { BadgeCheck, FileSearch, Gauge, Network, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</section>
  );
}

function GradientGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(36,55,99,0.35),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(17,94,89,0.25),transparent_60%)]" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px)",
        maskImage: "radial-gradient(circle at 50% 30%, black, transparent 70%)",
      }} />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        {/* Hero */}
        <div className="relative">
          <GradientGrid />
          <Section>
            <div className="grid gap-8 py-20 md:py-28 lg:grid-cols-2 items-center">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                  Protecting Market Integrity with AI-Powered Fraud Detection
                </h1>
                <p className="mt-4 text-muted-foreground text-lg max-w-xl">
                  An enterprise-grade platform for regulators and investors to identify scams, deepfakes, fake advisors, and market manipulation in real time.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/auth">Request Access</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/dashboard">See Platform</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
                <Card className="aspect-[16/10] bg-card/40 backdrop-blur border border-border/60">
                  <div className="absolute inset-0" style={{
                    background:
                      "radial-gradient(1200px_400px_at_10%_-10%, rgba(14,165,233,0.08), transparent), radial-gradient(1200px_400px_at_110%_110%, rgba(34,197,94,0.07), transparent)",
                  }} />
                  <div className="p-6 grid gap-4 h-full">
                    <div className="grid grid-cols-4 gap-3">
                      {[42,7,18,12].map((v, i) => (
                        <div key={i} className="rounded-md border border-border/60 bg-background/60 p-3 text-center">
                          <div className="text-xs text-muted-foreground">KPI {i+1}</div>
                          <div className="text-2xl font-semibold">{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 rounded-md border border-border/60 bg-background/60" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-md border border-border/60 bg-background/60" />
                      <div className="col-span-2 rounded-md border border-border/60 bg-background/60" />
                    </div>
                  </div>
                </Card>
                <div className="absolute -left-4 top-6 rounded-md bg-primary/10 text-primary px-2 py-1 text-xs border border-primary/30">
                  Real-Time Alerts
                </div>
                <div className="absolute right-6 bottom-8 rounded-md bg-accent/10 text-accent-foreground px-2 py-1 text-xs border border-accent/30">
                  Advisor Verification
                </div>
              </motion.div>
            </div>
          </Section>
        </div>

        {/* Trust */}
        <Section id="solutions" className="py-12">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <div className="text-sm text-primary/80">Trusted by financial institutions, built for regulators.</div>
            <p className="mt-2 text-sm text-muted-foreground">Our technology is aligned with SEBI’s Safe Space initiative and enterprise compliance standards.</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 rounded bg-muted/30 border border-border/60" />
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Features */}
        <Section id="platform" className="py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="grid gap-6">
              {[
                { icon: BadgeCheck, title: "Advisor & IPO Verification", text: "Verify advisors by name/phone/email and IPOs by company/ISIN with registry-backed confidence." },
                { icon: FileSearch, title: "Fraudulent Content Detection", text: "Scan text, PDFs, audio, and video for deepfakes, scams, and manipulation." },
                { icon: Gauge, title: "Pump-and-Dump Monitoring", text: "Detect abnormal volumes and coordinated behavior across sources." },
                { icon: Workflow, title: "Case Management & Dashboard", text: "Escalate alerts, assign cases, and track timelines across teams." },
              ].map((f) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex gap-4">
                  <div className="mt-1 rounded-md border border-border/60 bg-secondary/30 p-2 text-primary"><f.icon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="text-base font-medium">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.text}</p>
                  </div>
                </motion.div>
              ))}
              <div className="mt-4 flex gap-3">
                <Button asChild><Link to="/dashboard">Open Dashboard</Link></Button>
                <Button variant="outline" asChild><Link to="/auth">Request Access</Link></Button>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="h-[420px] bg-card/40 border-border/60 border relative">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(120deg, rgba(56,189,248,0.05), rgba(34,197,94,0.05))" }} />
                <div className="p-6 grid gap-4">
                  <div className="h-10 w-40 bg-muted/30 rounded" />
                  <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-20 rounded bg-background/60 border border-border/60" />
                    ))}
                  </div>
                  <div className="h-40 rounded bg-background/60 border border-border/60" />
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>

        {/* Process */}
        <Section id="resources" className="py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { icon: FileSearch, title: "Ingest suspicious content" },
              { icon: Network, title: "AI analysis + SEBI checks" },
              { icon: ShieldCheck, title: "Fraud scored & flagged" },
              { icon: Workflow, title: "Alerts + case workflow" },
            ].map((s, idx) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="relative">
                <div className="rounded-lg border bg-card/50 p-5 h-full">
                  <div className="mb-3 w-9 h-9 rounded-md bg-secondary/30 border border-border/60 flex items-center justify-center text-primary">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="font-medium">{idx + 1}. {s.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Preview */}
        <Section className="py-20">
          <Card className="relative overflow-hidden border-border/60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.06),transparent_40%)]" />
            <div className="relative p-6 md:p-10">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-1 grid grid-cols-2 gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="rounded border border-border/60 bg-background/60 p-3">
                      <div className="h-3 w-16 bg-muted/40 rounded" />
                      <div className="mt-3 h-6 w-12 bg-muted/30 rounded" />
                    </div>
                  ))}
                </div>
                <div className="md:col-span-2">
                  <div className="h-64 rounded border border-border/60 bg-background/60" />
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Why Us */}
        <Section id="company" className="py-16">
          <h2 className="text-2xl font-semibold text-center mb-10">Enterprise-Ready. Regulator-Proven.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Compliance-first architecture", text: "Data residency, audit trails, and policy controls aligned to enterprise standards." },
              { title: "Scalable infrastructure", text: "Built on modern cloud primitives with isolation and reliability SLAs." },
              { title: "Explainable AI scoring", text: "Transparent rationales, confidence metrics, and governance hooks." },
            ].map((v) => (
              <div key={v.title} className="rounded-lg border bg-card/60 p-6">
                <div className="font-medium">{v.title}</div>
                <p className="text-sm text-muted-foreground mt-2">{v.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section id="contact" className="py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-semibold">Safeguard investors. Strengthen trust. Ensure compliance.</h3>
            <p className="text-muted-foreground mt-2">Request early access to Aegis Intelligence.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild><Link to="/auth">Request Early Access</Link></Button>
              <Button variant="outline" asChild><Link to="/dashboard">Learn More</Link></Button>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <Section className="py-12">
          <div className="grid gap-8 md:grid-cols-4 text-sm">
            <div>
              <div className="font-medium">Solutions</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li><a href="#platform">Advisor Verification</a></li>
                <li><a href="#platform">Fraud Detection</a></li>
                <li><a href="#platform">Case Management</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Resources</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li><a href="#resources">How It Works</a></li>
                <li><a href="#platform">Platform</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Legal</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Company</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li><a href="#company">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-xs text-muted-foreground">© {new Date().getFullYear()} Aegis Intelligence. All rights reserved.</div>
        </Section>
      </footer>
    </div>
  );
}
