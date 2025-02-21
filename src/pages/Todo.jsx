import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Todo = () => {
  const [todo, setTodo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/todolist/${id}`);
        setTodo(response.data);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, [id]);

  if (!todo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6">
      {/* Back Button */}
      <button
        className="flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-200 mb-6 self-start"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-5 h-5" /> 
        <span className="text-lg font-medium">Back</span>
      </button>

      {/* Todo Card */}
      <Card className="w-[750px] shadow-xl rounded-2xl bg-white p-6 border border-gray-200">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-900">{todo.title}</CardTitle>
          <CardDescription className="text-gray-500 text-sm mt-1">{todo.date}</CardDescription>
        </CardHeader>
        <CardContent className="py-6">
          <p className="text-lg text-gray-800 leading-relaxed">{todo.description}</p>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-500">
          <h1>Made with ♥ by Mario Inguito</h1>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todo;
