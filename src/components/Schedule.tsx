interface ScheduleProps {
  onSignup: () => void;
}

const classes = [
  {
    day: "Пн",
    time: "07:30",
    title: "Утренняя разминка",
    trainer: "Анна С.",
    level: "Любой",
    duration: "30 мин",
    spots: 8,
  },
  {
    day: "Пн",
    time: "19:00",
    title: "Силовая тренировка",
    trainer: "Дмитрий К.",
    level: "Средний",
    duration: "60 мин",
    spots: 5,
  },
  {
    day: "Ср",
    time: "08:00",
    title: "Йога и растяжка",
    trainer: "Мария Л.",
    level: "Начинающий",
    duration: "45 мин",
    spots: 12,
  },
  {
    day: "Ср",
    time: "18:30",
    title: "HIIT-кардио",
    trainer: "Алексей В.",
    level: "Продвинутый",
    duration: "45 мин",
    spots: 3,
  },
  {
    day: "Пт",
    time: "07:00",
    title: "Функциональный тренинг",
    trainer: "Дмитрий К.",
    level: "Средний",
    duration: "60 мин",
    spots: 6,
  },
  {
    day: "Сб",
    time: "10:00",
    title: "Пилатес",
    trainer: "Мария Л.",
    level: "Любой",
    duration: "50 мин",
    spots: 10,
  },
];

const levelColor: Record<string, string> = {
  "Любой": "bg-neutral-200 text-neutral-700",
  "Начинающий": "bg-emerald-100 text-emerald-700",
  "Средний": "bg-amber-100 text-amber-700",
  "Продвинутый": "bg-red-100 text-red-700",
};

export default function Schedule({ onSignup }: ScheduleProps) {
  return (
    <section id="schedule" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4 text-center">Онлайн-занятия</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-4 uppercase tracking-tight">
          Расписание
        </h2>
        <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">
          Живые тренировки с тренером — выбирайте удобное время и подключайтесь онлайн
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {classes.map((cls, i) => (
            <div
              key={i}
              className="border border-neutral-200 p-6 hover:border-black transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-black text-white text-xs font-bold uppercase px-2 py-1 min-w-[36px] text-center">
                    {cls.day}
                  </div>
                  <span className="text-2xl font-bold text-neutral-900">{cls.time}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelColor[cls.level]}`}>
                  {cls.level}
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:underline transition-all">
                {cls.title}
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                {cls.trainer} · {cls.duration}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  {cls.spots} мест доступно
                </span>
                <button
                  onClick={onSignup}
                  className="text-xs uppercase tracking-wide font-semibold border border-black px-3 py-1.5 hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onSignup}
            className="bg-black text-white px-10 py-4 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Смотреть полное расписание
          </button>
        </div>
      </div>
    </section>
  );
}
