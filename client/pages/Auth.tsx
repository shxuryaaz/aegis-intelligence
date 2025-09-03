import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LayoutShell } from "@/components/layout/AppSidebar";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totp, setTotp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (!isSupabaseConfigured())
        throw new Error("Supabase is not configured.");
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message || "Authentication error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutShell>
      <div className="flex min-h-[calc(100svh-56px)] items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              {mode === "login" ? "Sign in" : "Create account"}
            </CardTitle>
            <CardDescription>Secure access with Supabase Auth</CardDescription>
          </CardHeader>
          <CardContent>
            {!isSupabaseConfigured() && (
              <div className="mb-4 rounded-md border border-yellow-700/40 bg-yellow-500/10 p-3 text-sm text-yellow-200">
                Environment variables VITE_SUPABASE_URL and
                VITE_SUPABASE_ANON_KEY are not set.
              </div>
            )}
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete={
                    mode === "login" ? "current-password" : "new-password"
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totp">MFA Code (if required)</Label>
                <Input
                  id="totp"
                  inputMode="numeric"
                  value={totp}
                  onChange={(e) => setTotp(e.target.value)}
                  placeholder="123456"
                />
              </div>
              {error && <div className="text-sm text-red-400">{error}</div>}
              <div className="flex items-center justify-between">
                <Button type="submit" disabled={loading}>
                  {loading
                    ? "Please wait…"
                    : mode === "login"
                      ? "Sign in"
                      : "Create account"}
                </Button>
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => setMode(mode === "login" ? "signup" : "login")}
                >
                  {mode === "login"
                    ? "Create account"
                    : "Have an account? Sign in"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </LayoutShell>
  );
}
