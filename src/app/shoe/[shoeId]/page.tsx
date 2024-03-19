export default function Shoe({ params }: { params: { shoeId: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{params.shoeId}</h1>
      </main>
    );
  }
  