import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export function CalendarReminders() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [reminders, setReminders] = useState<{ [date: string]: string[] }>({});
  const [newReminder, setNewReminder] = useState("");

  const remindersForDate = reminders[selectedDate] || [];

  function handleAddReminder() {
    if (!newReminder.trim()) return;
    setReminders((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), newReminder],
    }));
    setNewReminder("");
  }

  function handleDeleteReminder(idx: number) {
    setReminders((prev) => ({
      ...prev,
      [selectedDate]: prev[selectedDate].filter((_, i) => i !== idx),
    }));
  }

  return (
    <div className="text-white rounded-md p-5 bg-zinc-800 flex items-center flex-col gap-3 w-full max-w-xs">
      <div className="flex items-center gap-2 w-full justify-between">
        <div className="font-bold">Calendário com lembretes</div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="bg-white text-black border rounded px-2 py-1 text-xs"
        />
      </div>
      <div className="w-full">
        <div className="text-xs text-white mb-1">Lembretes do dia</div>
        <ul className="mb-2 space-y-1">
          {remindersForDate.length === 0 && (
            <li className="text-xs text-gray-400">Nenhum lembrete</li>
          )}
          {remindersForDate.map((reminder, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between text-xs bg-gray-100 rounded px-2 py-1"
            >
              <span>{reminder}</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDeleteReminder(idx)}
              >
                ✕
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            type="text"
            value={newReminder}
            onChange={(e) => setNewReminder(e.target.value)}
            placeholder="Novo lembrete"
            className="border border-zinc-700 outline-none rounded px-2 py-1 text-xs flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddReminder();
            }}
          />
          <Button size="icon" variant="outline" onClick={handleAddReminder}>
            <Plus size={16} color="black" />
          </Button>
        </div>
      </div>
    </div>
  );
}
