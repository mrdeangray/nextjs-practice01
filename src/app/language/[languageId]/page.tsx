export default function Page({ params }: { params: { pageId: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{params.pageId}</h1>
      </main>
    );
  }
  