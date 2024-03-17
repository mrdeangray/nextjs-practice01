export default function Truck({ params }: { params: { truckId: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{params.truckId}</h1>
      </main>
    );
  }