"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/ui/custom-cursor"), {
  ssr: false,
  loading: () => null,
});

export default function CursorLayer() {
  return <CustomCursor />;
}