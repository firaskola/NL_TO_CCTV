import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-200 min-h-screen p-6">
        {/* Main content area */}
        <h1 className="text-2xl font-bold">Welcome to OpenHack25</h1>
      </div>
    </div>
  );
}

export default Home;
