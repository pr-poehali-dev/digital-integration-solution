const reviews = [
  {
    name: "Екатерина М.",
    city: "Казань",
    text: "За 3 месяца тренировок с Анной похудела на 8 кг. Никогда не думала, что онлайн-формат может быть таким эффективным. Расписание удобное, тренер всегда на связи!",
    rating: 5,
    program: "Йога и растяжка",
  },
  {
    name: "Роман К.",
    city: "Москва",
    text: "Дмитрий — профессионал высшего уровня. Составил программу под мои цели, всегда корректирует технику на видео. Набрал 5 кг мышечной массы за полгода.",
    rating: 5,
    program: "Силовые тренировки",
  },
  {
    name: "Марина Г.",
    city: "Казань",
    text: "HIIT с Алексеем — это огонь! Жёсткие, но результативные тренировки. Через месяц заметила, что поднимаюсь по лестнице не задыхаясь. Рекомендую всем!",
    rating: 5,
    program: "HIIT-кардио",
  },
  {
    name: "Антон В.",
    city: "СПб",
    text: "Попробовал бесплатную неделю и остался на тариф Про. Видеоуроки высокого качества, живые занятия реально мотивируют не пропускать. Отличная платформа.",
    rating: 4,
    program: "Функциональный тренинг",
  },
  {
    name: "Ольга Н.",
    city: "Казань",
    text: "Занимаюсь с двумя детьми дома — онлайн-формат идеален для меня. Тренировки можно поставить на паузу, вернуться когда удобно. Сбросила 12 кг за 4 месяца!",
    rating: 5,
    program: "Утренняя разминка",
  },
  {
    name: "Сергей Т.",
    city: "Екатеринбург",
    text: "Доволен качеством и подходом тренеров. Программа питания в комплекте с Про-тарифом — реально рабочая. Советую всем, кто хочет результат без лишней воды.",
    rating: 5,
    program: "Силовые тренировки",
  },
];

export default function Reviews() {
  return (
    <section className="bg-neutral-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4 text-center">Отзывы</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-4 uppercase tracking-tight">
          Что говорят клиенты
        </h2>
        <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">
          Более 1 200 человек уже тренируются с нами — вот что они рассказывают
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-black text-sm">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, j) => (
                  <span key={j} className="text-neutral-300 text-sm">★</span>
                ))}
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed mb-6 flex-1">
                «{review.text}»
              </p>
              <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
                  <p className="text-neutral-400 text-xs">{review.city}</p>
                </div>
                <span className="text-xs text-neutral-400 border border-neutral-200 px-2 py-1">
                  {review.program}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
