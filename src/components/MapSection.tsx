import Icon from "@/components/ui/icon";

export default function MapSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4 text-center">Мы в Казани</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-4 uppercase tracking-tight">
          Наш офис
        </h2>
        <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">
          Тренируемся онлайн, но всегда рады встрече вживую
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex flex-col justify-center gap-8 lg:w-80 shrink-0">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="MapPin" size={18} color="white" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Адрес</p>
                <p className="text-neutral-500 text-sm">г. Казань, ул. Баумана, 44<br />2-й этаж, офис 201</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="Clock" size={18} color="white" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Режим работы</p>
                <p className="text-neutral-500 text-sm">Пн–Пт: 9:00 — 21:00<br />Сб–Вс: 10:00 — 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="Phone" size={18} color="white" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Телефон</p>
                <a
                  href="tel:+79276904709"
                  className="text-neutral-500 text-sm hover:text-black transition-colors"
                >
                  +7 (927) 690-47-09
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="Mail" size={18} color="white" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Почта</p>
                <a
                  href="mailto:nikita.u07@mail.ru"
                  className="text-neutral-500 text-sm hover:text-black transition-colors"
                >
                  nikita.u07@mail.ru
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[400px] lg:min-h-[480px] overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=49.106324%2C55.796127&z=15&pt=49.106324,55.796127,pm2rdm&text=FitOnline%2C%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C"
              width="100%"
              height="100%"
              style={{ border: "none", minHeight: "400px" }}
              title="Карта офиса FitOnline в Казани"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}