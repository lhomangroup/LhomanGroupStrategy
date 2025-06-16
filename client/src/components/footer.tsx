import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-dark">Lhoman Group Stratégie</h3>
            <p className="text-light">
              Conseil en stratégie d'entreprise pour dirigeants ambitieux
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light hover:text-primary-blue transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-light hover:text-primary-blue transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-dark">Expertises</h4>
            <ul className="space-y-2 text-light">
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">Transformation Digitale</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">Management & Leadership</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">Optimisation des Performances</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">Croissance & Expansion</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-dark">Entreprise</h4>
            <ul className="space-y-2 text-light">
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">À propos</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">Notre équipe</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">Carrières</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors duration-200">Actualités</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-dark">Contact</h4>
            <ul className="space-y-2 text-light">
              <li>Mobile : (+33) 7 43 16 82 35</li>
              <li>Fixe : (+33) 9 74 06 41 23</li>
              <li>contact@lhomangroup.fr</li>
              <li>187 Rue Colbert 92700 Colombes, France</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-light">
          <p>&copy; 2024 Lhoman Group Stratégie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
