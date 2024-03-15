export default function Car({ params }: { params: { carId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{params.carId}</h1>
    </main>
  );
}
