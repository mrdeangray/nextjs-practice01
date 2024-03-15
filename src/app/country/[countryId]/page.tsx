import Image from "next/image";

export default function Country({ params }: { params: { countryId: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{params.countryId}</h1>
        </main>
    );
}
