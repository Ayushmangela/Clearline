import { notFound } from "next/navigation";
import { CALLS } from "@/lib/mock-data";
import { CallDetail } from "./call-detail";

export function generateStaticParams() {
  return CALLS.map((c) => ({ id: c.id }));
}

export default async function CallDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const call = CALLS.find((c) => c.id === id);
  if (!call) notFound();
  return <CallDetail callId={id} />;
}
