import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-4">
      <div className="p-4 rounded flex items-center">
        <span>404 | </span>
        <h1>Not Found</h1>
      </div>
      <div>
        <Link
          to="/"
          className="p-2 bg-gray-200 rounded text-base font-medium text-gray-900 hover:bg-gray-300"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
