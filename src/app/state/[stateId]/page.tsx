export default function State({ params }: { params: { stateId: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{params.stateId}</h1>
      </main>
    );
  }
  