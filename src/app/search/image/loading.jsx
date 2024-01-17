export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col sm:flex-row pb-28 sm:space-x-4 pt-10 mx-2 lg:pl-52 max-w-6xl">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 mb-2.5 w-48 bg-gray-200 rounded-md"></div>
        <div className="h-2 mb-2.5 w-44 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse hidden sm:inline">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 mb-2.5 w-48 bg-gray-200 rounded-md"></div>
        <div className="h-2 mb-2.5 w-44 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse hidden sm:inline">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 mb-2.5 w-48 bg-gray-200 rounded-md"></div>
        <div className="h-2 mb-2.5 w-44 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
}
