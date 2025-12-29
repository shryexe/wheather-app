interface StatCardProps {
  icon: string;
  label: string;
  value: string;
}

export default function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="glass rounded-xl p-4 text-center hover:scale-105 transition-transform">
      <span className="text-2xl">{icon}</span>
      <p className="text-gray-400 text-sm mt-1">{label}</p>
      <p className="text-white font-semibold text-lg">{value}</p>
    </div>
  );
}
