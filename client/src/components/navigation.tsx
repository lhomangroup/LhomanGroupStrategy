import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-blue">Lhoman Group Stratégie</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className="text-dark hover:text-primary-blue transition-colors duration-200 font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('expertises')} 
                className="text-secondary-gray hover:text-primary-blue transition-colors duration-200 font-medium"
              >
                Expertises
              </button>
              <button 
                onClick={() => scrollToSection('methodes')} 
                className="text-secondary-gray hover:text-primary-blue transition-colors duration-200 font-medium"
              >
                Méthodes
              </button>
              <button 
                onClick={() => scrollToSection('equipe')} 
                className="text-secondary-gray hover:text-primary-blue transition-colors duration-200 font-medium"
              >
                Équipe
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Contact
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-gray hover:text-primary-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="block w-full text-left px-3 py-2 text-dark hover:text-primary-blue"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('expertises')} 
              className="block w-full text-left px-3 py-2 text-secondary-gray hover:text-primary-blue"
            >
              Expertises
            </button>
            <button 
              onClick={() => scrollToSection('methodes')} 
              className="block w-full text-left px-3 py-2 text-secondary-gray hover:text-primary-blue"
            >
              Méthodes
            </button>
            <button 
              onClick={() => scrollToSection('equipe')} 
              className="block w-full text-left px-3 py-2 text-secondary-gray hover:text-primary-blue"
            >
              Équipe
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-3 py-2 text-secondary-gray hover:text-primary-blue"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
