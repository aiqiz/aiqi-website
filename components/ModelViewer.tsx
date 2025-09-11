// components/ModelViewer.tsx
"use client";
import { useEffect } from "react";

// Ultra-minimal wrapper. No heavy types; works with all model-viewer attrs.
export default function ModelViewer(props: any) {
  // Load the web component only in the browser to avoid "self is not defined"
  useEffect(() => { import("@google/model-viewer"); }, []);
  return <model-viewer {...props} />;
}
