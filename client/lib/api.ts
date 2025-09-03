import { supabase } from "./supabase";

export async function apiFetch<T = unknown>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  const session = supabase
    ? (await supabase.auth.getSession()).data.session
    : null;
  const headers = new Headers(init?.headers);
  if (session?.access_token)
    headers.set("Authorization", `Bearer ${session.access_token}`);
  const res = await fetch(input, { ...init, headers });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return (await res.json()) as T;
}
