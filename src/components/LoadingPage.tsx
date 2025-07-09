const LoadingPage = () => {
  return (
    <main className="bg-[#191919] h-[100svh] w-full grid place-items-center">
      <div
        className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700"
      ></div>
    </main>
  );
};

export default LoadingPage;
