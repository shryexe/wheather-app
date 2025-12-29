export function SkeletonCard() {
  return (
    <div className="glass rounded-3xl p-8 neon-glow">
      <div className="skeleton h-8 w-48 rounded-lg mb-4" />
      <div className="skeleton h-24 w-32 rounded-lg mb-6" />
      <div className="skeleton h-6 w-64 rounded-lg mb-2" />
      <div className="grid grid-cols-2 gap-4 mt-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="skeleton h-20 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export function SkeletonForecast() {
  return (
    <div className="glass rounded-3xl p-6 neon-glow mt-6">
      <div className="skeleton h-6 w-32 rounded-lg mb-4" />
      <div className="flex gap-4 overflow-x-auto pb-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="skeleton h-32 w-24 rounded-xl shrink-0" />
        ))}
      </div>
    </div>
  );
}
