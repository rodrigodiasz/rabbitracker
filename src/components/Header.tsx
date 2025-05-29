import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Flame from "../assets/flame.png";
import Logo from "../assets/logo.png";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

function getLastDays(count = 6) {
  const today = new Date();
  const days = [];
  for (let i = count; i > 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push({
      label: weekDays[d.getDay()],
      date: d.getDate(),
    });
  }
  return days;
}

export function Header() {
  const today = new Date();
  const lastDays = getLastDays(6);
  return (
    <div className="flex items-center text-white justify-between gap-4 p-4 border-b">
      <div className="flex items-center gap-2">
        {lastDays.map((day, i) => (
          <div key={i} className="flex flex-col items-center mx-1">
            <div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm">
              {day.date}
            </div>
            <span className="text-xs mt-1">{day.label}</span>
          </div>
        ))}
        <div className="flex flex-col items-center mx-1">
          <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center text-sm font-bold">
            {today.getDate()}
          </div>
          <span className="text-xs mt-1 font-bold">
            {weekDays[today.getDay()]}
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-30 h-30" />
        <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Rabbitracker</h1>
        <p className="text-sm font-light">Smart tracking for daily habits</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <button
            className="relative flex items-center justify-center"
            onClick={() => {
              /* ação do botão aqui */
            }}
          >
            <img src={Flame} alt="" className="w-12 h-12" />
            <span className="absolute inset-0 top-7.5 text-sm flex items-center justify-center font-bold text-base text-black pointer-events-none">
              5
            </span>
          </button>
          <span className="text-xs mt-1 text-white">Streak</span>
        </div>
        <div className="flex flex-col items-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white flex items-center justify-center"
          >
            <User color="#000" size={40} />
          </Button>
          <span className="text-xs mt-1 text-white">Perfil</span>
        </div>
      </div>
    </div>
  );
}
