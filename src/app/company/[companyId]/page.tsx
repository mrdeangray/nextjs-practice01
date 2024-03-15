export default function Company({ params }: { params: { companyId: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{params.companyId}</h1>
        </main>
    );
}
