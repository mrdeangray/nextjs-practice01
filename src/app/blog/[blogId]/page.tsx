import Image from "next/image";

export default function Blog({ params }: { params: { blogId: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{params.blogId}</h1>
        </main>
    );
}
