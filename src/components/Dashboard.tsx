import { Header } from "./Header";
import { ProgressCircle } from "./ProgressCircle";
import { HabitsList } from "./HabitsList";
import { TasksList } from "./TasksList";
import { CalendarReminders } from "./CalendarReminders";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";

const initialHabits = [
  { id: 1, name: "Hábito 1", done: false },
  { id: 2, name: "Hábito 2", done: false },
  { id: 3, name: "Hábito 3", done: false },
  { id: 4, name: "Hábito 4", done: false },
];
const initialTasks = [
  { id: 1, name: "Tarefa do dia", done: false },
  { id: 2, name: "Tarefa do dia", done: false },
];

export default function Dashboard() {
  const [habits, setHabits] = useState(initialHabits);
  const [tasks, setTasks] = useState(initialTasks);

  const percent = Math.round(
    ((habits.filter((h) => h.done).length +
      tasks.filter((t) => t.done).length) /
      (habits.length + tasks.length)) *
      100
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-8 bg-zinc-900">
      <div className="w-full max-w-7xl px-8">
        <Header />
        <div className="flex items-center gap-12 mt-12">
          <div className="flex items-center flex-col gap-8 w-1/3 min-w-[320px]">
            <ProgressCircle percent={percent} />
            <CalendarReminders />
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white text-lg">Meus Hábitos</span>
              <Button variant="outline" size="sm">
                <Plus size={16} color="black" />
              </Button>
            </div>
            <HabitsList
              habits={habits}
              onEdit={() => {}}
              onDelete={() => {}}
              onToggle={(id) =>
                setHabits((h) =>
                  h.map((habit) =>
                    habit.id === id ? { ...habit, done: !habit.done } : habit
                  )
                )
              }
            />
            <div className="flex items-center gap-4 mt-8">
              <span className="font-semibold text-white text-lg">Tarefas do dia</span>
              <Button variant="outline" size="sm">
                <Plus size={16} color="black" />
              </Button>
            </div>
            <TasksList
              tasks={tasks}
              onEdit={() => {}}
              onDelete={() => {}}
              onToggle={(id) =>
                setTasks((t) =>
                  t.map((task) =>
                    task.id === id ? { ...task, done: !task.done } : task
                  )
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
