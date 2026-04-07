export default function Featured() {
  const features = [
    { icon: "🎬", title: "Видеоуроки", desc: "Сотни записей на любой уровень подготовки" },
    { icon: "📋", title: "Программы", desc: "Готовые планы от профессиональных тренеров" },
    { icon: "📅", title: "Расписание", desc: "Живые занятия в удобное для вас время" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/536451f7-8f5e-4a00-b0a9-6ee503931d54/files/7327d74e-5c0e-4abd-8b16-d9625cc21e10.jpg"
          alt="Онлайн-тренировка с тренером"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Всё что нужно для результата</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Не просто тренировки — система, которая работает. Занимайтесь дома, в зале или на улице по расписанию или в своём темпе.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-semibold text-neutral-900">{f.title}</p>
                <p className="text-neutral-500 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть программы
        </button>
      </div>
    </div>
  );
}
