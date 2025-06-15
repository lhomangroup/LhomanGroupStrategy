import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="accueil" className="pt-20 bg-gradient-to-br from-neutral-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-dark leading-tight">
                Transformez votre{" "}
                <span className="text-primary-blue">stratégie</span>{" "}
                en succès
              </h1>
              <p className="text-xl text-secondary-gray leading-relaxed">
                Conseil en stratégie d'entreprise pour dirigeants ambitieux. 
                Nous accompagnons les organisations dans leur transformation et leur croissance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary-blue text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
              >
                Demander une consultation
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('methodes')}
                className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg hover:bg-primary-blue hover:text-white transition-colors duration-200 font-semibold text-lg"
              >
                Découvrir nos méthodes
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue">150+</div>
                <div className="text-sm text-secondary-gray">Entreprises accompagnées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue">15</div>
                <div className="text-sm text-secondary-gray">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue">95%</div>
                <div className="text-sm text-secondary-gray">Taux de satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Équipe de consultants en stratégie d'entreprise" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-dark">Résultats mesurables</div>
                  <div className="text-sm text-secondary-gray">ROI moyen de 300%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
