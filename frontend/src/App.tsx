import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log("URL:::", import.meta.env.VITE_PRIVATE_BASE_URL);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_PRIVATE_BASE_URL);
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Email</th>
          <th className="border border-gray-300 px-4 py-2">Phone</th>
          <th className="border border-gray-300 px-4 py-2">Active</th>
          <th className="border border-gray-300 px-4 py-2">Created At</th>
          <th className="border border-gray-300 px-4 py-2">Updated At</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user: any) => (
          <tr key={user.id}>
            <td className="border border-gray-300 px-4 py-2">{user.id}</td>
            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
            <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
            <td className="border border-gray-300 px-4 py-2">
              {user.isActive ? "Yes" : "No"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {new Date(user.createdAt).toLocaleString()}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {new Date(user.updatedAt).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
