import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <Cat className="w-16 h-16 mx-auto mb-4 text-blue-500" />
        <h1 className="text-3xl font-bold mb-2">Cats</h1>
        <p className="text-gray-600">Furry, adorable, and independent companions.</p>
      </div>
    </div>
  );
};

export default Index;
