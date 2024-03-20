export default function Genre({ params }: { params: { genreId: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{params.genreId}</h1>
      </main>
    );
  }
  