type ProgressCircleProps = {
  percent: number;
};

export function ProgressCircle({ percent }: ProgressCircleProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-60 h-60">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#27272a"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#4F9FB5"
            strokeWidth="10"
            fill="none"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45 * (1 - percent / 100)}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.5s" }}
          />
        </svg>
        <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{percent}%</span>
          <span className="text-xs text-center">Concluídos</span>
        </div>
      </div>
    </div>
  );
}
