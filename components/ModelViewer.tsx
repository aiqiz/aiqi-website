// components/ModelViewer.tsx
"use client";
import { useEffect, useState } from "react";

// Ultra-minimal wrapper. No heavy types; works with all model-viewer attrs.
// Renders nothing until the custom element is registered in the browser, which
// replaces the old `next/dynamic({ ssr: false })` call site — Next.js 15+ no
// longer allows `ssr: false` from a Server Component.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModelViewer(props: any) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    // Import in the browser only, to avoid "self is not defined" on the server.
    import("@google/model-viewer").then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return null;
  return <model-viewer {...props} />;
}
