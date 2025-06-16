export default function MethodologySection() {
  const steps = [
    {
      number: "1",
      title: "Diagnostic Approfondi",
      description: "Analyse complète de votre organisation, de vos processus et de votre positionnement concurrentiel.",
    },
    {
      number: "2",
      title: "Stratégie Sur-Mesure",
      description: "Élaboration d'une feuille de route adaptée à vos enjeux spécifiques et à votre secteur d'activité.",
    },
    {
      number: "3",
      title: "Mise en Œuvre",
      description: "Accompagnement opérationnel dans le déploiement des solutions avec vos équipes internes.",
    },
    {
      number: "4",
      title: "Suivi & Optimisation",
      description: "Mesure des résultats et ajustements continus pour assurer l'atteinte des objectifs fixés.",
    },
  ];

  return (
    <section id="methodes" className="py-20 bg-gradient-to-br from-neutral-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-dark">Notre Méthode Éprouvée</h2>
              <p className="text-xl text-light leading-relaxed">
                Une approche structurée en 4 étapes pour garantir des résultats durables et mesurables.
              </p>
            </div>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">{step.title}</h3>
                    <p className="text-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Session de stratégie d'entreprise avec données et graphiques" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">6 mois</div>
                <div className="text-sm text-light">Durée moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
