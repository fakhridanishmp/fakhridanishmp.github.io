export default function AchievementCard({ title, items }) {
  return (
    <div className="text-white font-mono">
      <h3 className="text-xl font-bold">{">"} {title}</h3>
      <ul className="text-md mt-2 space-y-2 list-disc list-inside">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
