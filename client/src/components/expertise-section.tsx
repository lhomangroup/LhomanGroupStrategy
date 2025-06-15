import { Rocket, Users, BarChart3, Expand, Shield, Handshake, ArrowRight } from "lucide-react";

const expertises = [
  {
    icon: Rocket,
    title: "Transformation Digitale",
    description: "Accompagnement dans la digitalisation des processus et la mise en place de nouvelles technologies pour optimiser la performance.",
  },
  {
    icon: Users,
    title: "Management & Leadership",
    description: "Développement des compétences managériales et accompagnement des équipes dirigeantes dans leur évolution.",
  },
  {
    icon: BarChart3,
    title: "Optimisation des Performances",
    description: "Analyse et amélioration des processus opérationnels pour maximiser l'efficacité et la rentabilité.",
  },
  {
    icon: Expand,
    title: "Croissance & Expansion",
    description: "Stratégies de développement, expansion géographique et diversification pour accélérer la croissance.",
  },
  {
    icon: Shield,
    title: "Gestion des Risques",
    description: "Identification, évaluation et mitigation des risques stratégiques et opérationnels de l'entreprise.",
  },
  {
    icon: Handshake,
    title: "Fusions & Acquisitions",
    description: "Accompagnement dans les opérations de M&A, due diligence et intégration post-acquisition.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertises" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark">Nos Expertises</h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            Une approche holistique du conseil en stratégie, adaptée aux défis contemporains de votre secteur
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <div key={index} className="bg-neutral-light p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-blue/20 transition-colors duration-300">
                  <Icon className="text-primary-blue h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{expertise.title}</h3>
                <p className="text-secondary-gray leading-relaxed mb-6">
                  {expertise.description}
                </p>
                <button className="text-primary-blue font-medium hover:text-blue-700 transition-colors duration-200 flex items-center gap-2">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
