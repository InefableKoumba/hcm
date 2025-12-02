import { Heart, Handshake } from "lucide-react";
import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "Ministère des Affaires Sociales",
      category: "Institution publique",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d9f806862e?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Organisation Mondiale de la Santé",
      category: "Organisation internationale",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Fondation Orange",
      category: "Entreprise",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Association des Personnes Handicapées",
      category: "Association",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Banque Centrale du Congo",
      category: "Institution financière",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=100&auto=format&fit=crop",
    },
    {
      name: "Université Marien Ngouabi",
      category: "Éducation",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=100&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
            <Handshake size={32} className="text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Partenaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous travaillons en collaboration avec des institutions, entreprises
            et organisations engagées pour créer un impact durable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all flex flex-col items-center justify-center text-center min-h-[180px] hover:border-primary/30"
            >
              <div className="relative w-20 h-20 mb-4 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
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
