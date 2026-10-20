export default function Loading() {
  return (
    <div className="space-y-8 py-8 animate-pulse">
      <div className="h-48 w-full rounded-3xl bg-garis" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="space-y-3 rounded-2xl border border-garis p-3">
            <div className="aspect-square w-full rounded-xl bg-garis" />
            <div className="h-4 w-3/4 rounded bg-garis" />
            <div className="h-4 w-1/2 rounded bg-garis" />
          </div>
        ))}
      </div>
    </div>
  );
}
