import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Horaires d'ouverture</h3>
            <div className="flex items-start space-x-2">
              <Clock className="h-5 w-5 mt-1" />
              <div>
                <p>Lundi - Vendredi: 11h30 - 14h30 | 19h00 - 22h30</p>
                <p>Samedi: 19h00 - 23h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <p>01 23 45 67 89</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <p>contact@lerestaurant.fr</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <p>123 Rue de la Gastronomie, 75000 Paris</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="/mentions-legales" className="hover:text-orange-400">Mentions légales</a></li>
              <li><a href="/politique-confidentialite" className="hover:text-orange-400">Politique de confidentialité</a></li>
              <li><a href="/cgv" className="hover:text-orange-400">CGV</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Le Restaurant. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;