interface WorkDetailProps {
  params: { slug: string };
}

export default function WorkDetailPage({ params }: WorkDetailProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Project: {params.slug}</h1>
      <p className="mt-2 text-gray-600">Detailed info about this project will be here.</p>
    </div>
  );
}
