export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4 text-center">Об авторе</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-16 uppercase tracking-tight">
          Кто за этим стоит
        </h2>

        <div className="flex flex-col gap-10">
          <div className="border-l-4 border-black pl-6">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Автор проекта</p>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">Ульянов Никита Денисович</h3>
            <p className="text-neutral-500">Студент 2 курса · Группа ПОНБгп24о2</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Цель проекта</p>
            <p className="text-neutral-700 leading-relaxed text-lg">
              Цель данного проекта — разработка современного лендинга для платформы онлайн-тренировок,
              демонстрирующего возможности веб-разработки при создании коммерческих продуктов в сфере
              фитнеса и здорового образа жизни. Проект охватывает проектирование пользовательского
              интерфейса, реализацию интерактивных элементов, а также интеграцию форм обратной связи
              и картографических сервисов.
            </p>
          </div>

          <div className="bg-neutral-100 px-6 py-5">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Важно</p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Данный сайт является <strong>учебным проектом</strong> и создан в образовательных целях.
              Все представленные тренеры, отзывы, расписание и цены носят демонстрационный характер
              и не являются публичной офертой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
