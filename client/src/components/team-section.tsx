import { CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Homère Kouassi",
    role: "PDG & Fondateur - Directeur Stratégie",
    credentials: "",
    image: "@assets/image_1750070948912.png",
  },
  {
    name: "Marc Dubois",
    role: "Expert Transformation Digitale",
    credentials: "",
    image: "@assets/image_1750071132150.png",
  },
];

const advantages = [
  "Expertise reconnue dans tous les secteurs",
  "Approche pragmatique et orientée résultats",
  "Accompagnement personnalisé à long terme",
  "Réseau international de partenaires",
];

export default function TeamSection() {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark">Notre Équipe d'Experts</h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            Des consultants seniors avec une expertise sectorielle reconnue et une expérience internationale
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <img 
                src={member.image} 
                alt={`Portrait professionnel de ${member.name}`} 
                className="w-48 h-48 mx-auto rounded-full object-cover mb-6 group-hover:scale-105 transition-transform duration-300" 
              />
              <h3 className="text-xl font-semibold text-dark mb-2">{member.name}</h3>
              <p className="text-primary-blue font-medium mb-2">{member.role}</p>
              {member.credentials && <p className="text-secondary-gray text-sm">{member.credentials}</p>}
            </div>
          ))}
        </div>
        
        <div className="bg-neutral-light rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-dark mb-4">Pourquoi Choisir Lhoman Group ?</h3>
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-blue h-5 w-5" />
                    <span className="text-secondary-gray">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Équipe de consultants en réunion stratégique" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
