import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";

type Task = {
  id: number;
  name: string;
  done: boolean;
};

type TasksListProps = {
  tasks: Task[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export function TasksList({
  tasks,
  onEdit,
  onDelete,
  onToggle,
}: TasksListProps) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-2 rounded-md text-white px-5 py-1.5 bg-zinc-800"
        >
          <span className="flex-1">{task.name}</span>
          <button
            className="p-0 flex items-center justify-center"
            onClick={() => onEdit(task.id)}
          >
            <Pencil size={16} color="white" />
          </button>
          <button
            className="p-0 flex items-center justify-center"
            onClick={() => onDelete(task.id)}
          >
            <Trash2 size={16} color="red" />
          </button>
          <Checkbox
            checked={task.done}
            onCheckedChange={() => onToggle(task.id)}
          />
        </div>
      ))}
    </div>
  );
}
