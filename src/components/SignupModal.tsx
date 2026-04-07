import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEND_LEAD_URL = "https://functions.poehali.dev/93db65f7-6d90-4edb-9b80-3755e014714f";

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-md p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2 uppercase tracking-tight">
                  Начать тренировки
                </h2>
                <p className="text-neutral-500 text-sm mb-6">
                  Оставьте контакты — мы свяжемся и подберём программу для вас
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-800 transition-colors mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={24} color="white" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2 uppercase">Отлично!</h2>
                <p className="text-neutral-500 text-sm">
                  Заявка принята. Мы свяжемся с вами в ближайшее время и подберём программу.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}