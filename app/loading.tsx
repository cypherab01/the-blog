const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
