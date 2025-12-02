import Image from "next/image";

export default function ImageBanner() {
  return (
    <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop"
          alt="Communauté inclusive"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ensemble pour une société inclusive
          </h2>
          <p className="text-xl leading-relaxed">
            Chaque action compte. Rejoignez-nous dans notre mission pour créer
            un Congo où la mobilité et l'inclusion sont accessibles à tous.
          </p>
        </div>
      </div>
    </section>
  );
}
