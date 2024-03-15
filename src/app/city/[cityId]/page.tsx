export default function City({ params }: { params: { cityId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{params.cityId}</h1>
    </main>
  );
}
