import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";

type Habit = {
  id: number;
  name: string;
  done: boolean;
};

type HabitsListProps = {
  habits: Habit[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export function HabitsList({
  habits,
  onEdit,
  onDelete,
  onToggle,
}: HabitsListProps) {
  return (
    <div className="space-y-2">
      {habits.map((habit) => (
        <div
          key={habit.id}
          className="flex items-center gap-2 rounded-md text-white px-5 py-1.5 bg-zinc-800"
        >
          <span className="flex-1">{habit.name}</span>
          <button
            className="p-0 flex items-center justify-center"
            onClick={() => onEdit(habit.id)}
          >
            <Pencil size={16} color="white" />
          </button>
          <button
            className="p-0 flex items-center justify-center"
            onClick={() => onDelete(habit.id)}
          >
            <Trash2 size={16} color="red" />
          </button>
          <Checkbox
            checked={habit.done}
            onCheckedChange={() => onToggle(habit.id)}
          />
        </div>
      ))}
    </div>
  );
}
