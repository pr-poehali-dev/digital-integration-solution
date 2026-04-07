interface PricingProps {
  onSignup: () => void;
}

const plans = [
  {
    name: "Старт",
    price: "990",
    period: "мес",
    description: "Для тех, кто только начинает",
    features: [
      "50+ видеоуроков",
      "1 программа тренировок",
      "Доступ к расписанию",
      "Поддержка в чате",
    ],
    highlighted: false,
  },
  {
    name: "Про",
    price: "2 490",
    period: "мес",
    description: "Максимум для результата",
    features: [
      "Все видеоуроки без ограничений",
      "Все программы тренировок",
      "4 живых занятия в месяц",
      "Персональный план питания",
      "Приоритетная поддержка",
    ],
    highlighted: true,
  },
  {
    name: "Команда",
    price: "4 990",
    period: "мес",
    description: "Для корпоративных клиентов",
    features: [
      "До 10 участников",
      "Все возможности Про",
      "Групповые живые занятия",
      "Отчёты по прогрессу",
      "Персональный менеджер",
    ],
    highlighted: false,
  },
];

export default function Pricing({ onSignup }: PricingProps) {
  return (
    <section id="programs" className="bg-neutral-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4 text-center">Тарифы</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-4 uppercase tracking-tight">
          Выберите свой план
        </h2>
        <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">
          Гибкие условия для любого уровня подготовки. Первые 7 дней — бесплатно.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-8 ${
                plan.highlighted
                  ? "bg-black text-white"
                  : "bg-white text-neutral-900"
              }`}
            >
              {plan.highlighted && (
                <span className="text-xs uppercase tracking-widest text-neutral-400 mb-4">
                  Популярный
                </span>
              )}
              <h3 className="text-xl font-bold uppercase tracking-wide mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-neutral-400" : "text-neutral-500"}`}>
                {plan.description}
              </p>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm mb-1 ${plan.highlighted ? "text-neutral-400" : "text-neutral-500"}`}>
                  ₽/{plan.period}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 ${plan.highlighted ? "text-white" : "text-black"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onSignup}
                className={`py-3 uppercase tracking-wide text-sm font-semibold transition-colors cursor-pointer ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-black text-white hover:bg-neutral-800"
                }`}
              >
                Начать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
