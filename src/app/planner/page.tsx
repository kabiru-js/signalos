import { getContent, getFormatInsights } from "@/lib/actions";
import PlannerClient from "./PlannerClient";

export default async function PlannerPage() {
    const content = await getContent();
    const insights = await getFormatInsights();

    // Filter for ideas and planned items
    const ideas = content.filter((c: { status: string }) => c.status === "IDEA" || c.status === "PLANNED" || c.status === "draft");

    return (
        <PlannerClient
            initialContent={ideas}
            insights={insights}
        />
    );
}
