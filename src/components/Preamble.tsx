import { Target, Heart, Scale, FileText } from "lucide-react";
import Image from "next/image";

export default function Preamble() {
  const preambleSections = [
    {
      icon: Target,
      title: "Notre Objet",
      content:
        "La fondation HandiMobilité Congo, en abrégé HMC, a pour objet de contribuer à la pleine inclusion des personnes en situation de handicap, notamment dans le domaine de la mobilité. Le droit à la liberté de mouvement, à l'éducation, à la santé, à l'emploi et à la participation sociale est fondamental pour chaque citoyen. La fondation entend lutter contre toute forme de discrimination, d'exclusion et de marginalisation liée aux difficultés de mobilité.",
      color: "#0052a3",
    },
    {
      icon: Heart,
      title: "Notre Mission",
      content:
        "La mission de HMC est de promouvoir, soutenir et développer des initiatives visant à améliorer la mobilité des personnes en situation de handicap sur l'ensemble du territoire de la République du Congo, en s'appuyant sur des valeurs de solidarité, de dignité humaine, de responsabilité civique et de justice sociale.",
      color: "#00a86b",
    },
    {
      icon: Scale,
      title: "Nos Engagements",
      content:
        "Les actions de la fondation s'inscrivent dans le respect des engagements internationaux et nationaux de la République du Congo en matière de droits des personnes en situation de handicap.",
      color: "#0052a3",
    },
    {
      icon: FileText,
      title: "Notre Cadre Juridique",
      content:
        "Les présents statuts ont pour objet d'organiser la personnalité juridique, la gouvernance, le fonctionnement et les ressources de la Fondation HandiMobilité Congo (HMC), en conformité avec les lois et règlements en vigueur en République du Congo, notamment ceux relatifs aux associations et fondations à but non lucratif.",
      color: "#00a86b",
    },
  ];

  return (
    <section className="section bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <FileText size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              Fondation
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">PRÉAMBULE</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les principes fondamentaux qui guident notre action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
              alt="Fondation HandiMobilité Congo"
              fill
              className="object-cover"
            />
          </div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block" />

            <div className="space-y-8">
              {preambleSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div key={index} className="relative pl-0 lg:pl-20">
                    {/* Timeline dot - hidden on mobile */}
                    <div
                      className="absolute left-6 top-2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"
                      style={{ backgroundColor: section.color }}
                    />

                    {/* Content */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4 mb-3">
                        <div
                          className="p-2 rounded-lg shrink-0"
                          style={{ backgroundColor: `${section.color}15` }}
                        >
                          <IconComponent
                            size={20}
                            color={section.color}
                            strokeWidth={2}
                          />
                        </div>
                        <h3
                          className="text-xl font-bold"
                          style={{ color: section.color }}
                        >
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {section.content.split("HMC").map((part, i, arr) =>
                          i < arr.length - 1 ? (
                            <span key={i}>
                              {part}
                              <strong className="text-primary font-semibold">
                                HMC
                              </strong>
                            </span>
                          ) : (
                            <span key={i}>{part}</span>
                          )
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-hero rounded-full text-white shadow-lg">
            <Heart size={20} fill="currentColor" />
            <span className="font-semibold">Fondation à but non lucratif</span>
          </div>
        </div>
      </div>
    </section>
  );
}
