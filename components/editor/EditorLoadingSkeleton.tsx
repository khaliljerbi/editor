function EditorLoadingSkeleton() {
  return (
    <div className="h-[90vh]w-full flex flex-col gap-4 py-6">
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-white/5 rounded`}
          style={{ width: `${Math.random() * 60 + 20}%` }}
        />
      ))}
    </div>
  );
}

export default EditorLoadingSkeleton;
