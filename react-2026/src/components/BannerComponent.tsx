export default function BannerComponent() {
  return (
    <div
      className={
        "w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex  text-white text-3xl font-bold mb-8 rounded-lg shadow-lg"
      }
    >
      <div className="flex-3">content</div>
      <div className="flex-2">img</div>
    </div>
  );
}
