import { Building2, Heart, Handshake } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      name: "Ministère des Affaires Sociales",
      category: "Institution publique",
      logo: "🏛️",
    },
    {
      name: "Organisation Mondiale de la Santé",
      category: "Organisation internationale",
      logo: "🌍",
    },
    {
      name: "Fondation Orange",
      category: "Entreprise",
      logo: "📱",
    },
    {
      name: "Association des Personnes Handicapées",
      category: "Association",
      logo: "🤝",
    },
    {
      name: "Banque Centrale du Congo",
      category: "Institution financière",
      logo: "🏦",
    },
    {
      name: "Université Marien Ngouabi",
      category: "Éducation",
      logo: "🎓",
    },
  ];

  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
            <Handshake size={32} className="text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous travaillons en collaboration avec des institutions, entreprises
            et organisations engagées pour créer un impact durable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center min-h-[150px]"
            >
              <div className="text-4xl mb-3">{partner.logo}</div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-600">{partner.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Vous souhaitez devenir partenaire de notre fondation ?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90"
          >
            <Heart size={18} />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

