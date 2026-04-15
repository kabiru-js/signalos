import { prisma } from "@/lib/prisma";
import ManagementControls from "@/components/ManagementControls";

export default async function WorkerManagement() {
    const workers = await prisma.worker.findMany({
        include: { accounts: { include: { account: true } } },
        orderBy: { createdAt: "desc" },
    });
    const allAccounts = await prisma.account.findMany({ orderBy: { createdAt: "desc" } });

    const serializedWorkers = workers.map((w) => ({
        id: w.id,
        name: w.name,
        productivity: w.productivity,
        accounts: w.accounts.map((wa) => ({ account: { id: wa.account.id, name: wa.account.name, platform: wa.account.platform } })),
    }));

    const serializedAccounts = allAccounts.map((a) => ({ id: a.id, name: a.name, platform: a.platform }));

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Worker & Account Management
                </h1>
                <p className="text-zinc-400 mt-2">Assign workers to accounts. Click account badges to unassign.</p>
            </div>
            <ManagementControls allAccounts={serializedAccounts} workers={serializedWorkers} />
        </div>
    );
}
