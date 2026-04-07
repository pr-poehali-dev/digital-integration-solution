interface TrainersProps {
  onSignup: () => void;
}

const trainers = [
  {
    name: "Анна Смирнова",
    role: "Йога и растяжка",
    experience: "8 лет опыта",
    specialties: ["Хатха-йога", "Пилатес", "Восстановление"],
    photo: "https://cdn.poehali.dev/projects/536451f7-8f5e-4a00-b0a9-6ee503931d54/files/209cf2d8-e0fa-444a-9295-bf057912dcc4.jpg",
  },
  {
    name: "Дмитрий Козлов",
    role: "Силовые тренировки",
    experience: "12 лет опыта",
    specialties: ["Функциональный тренинг", "Силовой спорт", "Набор массы"],
    photo: "https://cdn.poehali.dev/projects/536451f7-8f5e-4a00-b0a9-6ee503931d54/files/c399250e-752e-4596-b3be-c2c8958649b9.jpg",
  },
  {
    name: "Алексей Волков",
    role: "Кардио и HIIT",
    experience: "6 лет опыта",
    specialties: ["HIIT", "Кардио", "Снижение веса"],
    photo: "https://cdn.poehali.dev/projects/536451f7-8f5e-4a00-b0a9-6ee503931d54/files/b87bc53a-59ca-4383-97bf-34c98b19e5f4.jpg",
  },
];

export default function Trainers({ onSignup }: TrainersProps) {
  return (
    <section id="trainers" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4 text-center">Команда</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-4 uppercase tracking-tight">
          Наши тренеры
        </h2>
        <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">
          Профессионалы с многолетним опытом — каждый специализируется в своём направлении
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group">
              <div className="overflow-hidden mb-5 aspect-[3/4]">
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">{trainer.name}</h3>
              <p className="text-sm uppercase tracking-wide text-neutral-500 mb-1">{trainer.role}</p>
              <p className="text-xs text-neutral-400 mb-3">{trainer.experience}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {trainer.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs border border-neutral-300 px-2 py-1 text-neutral-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={onSignup}
                className="text-xs uppercase tracking-wide font-semibold border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
