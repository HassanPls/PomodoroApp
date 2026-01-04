import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Box from "./Box";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <Box>
      <ul>
        {tasks.length == 0 && <p>Nenhuma tarefa encontrada</p>}
        {
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 flex items-center gap-2 text-left w-full text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <button className="bg-green-400 text-slate-900 p-2 rounded-md hover:bg-green-500 active:bg-slate-600 transition-all" onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </button>
            <button className="bg-red-400 text-slate-900 p-2 rounded-md hover:bg-green-500 active:bg-slate-600 transition-all" onClick={() => onTaskDelete(task.id)}>
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Tasks;
