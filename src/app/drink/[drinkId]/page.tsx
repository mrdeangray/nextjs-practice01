import Image from "next/image";

export default function Drink({ params }: { params: { drinkId: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{params.drinkId}</h1>
        </main>
    );
}
