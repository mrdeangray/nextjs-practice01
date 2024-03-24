export default function Grade({ params }: { params: { gradeId: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{params.gradeId}</h1>
      </main>
    );
  }
  