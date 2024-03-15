import Image from "next/image";

export default function Daw({ params }: { params: { dawId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{params.dawId}</h1>
    </main>
  );
}
