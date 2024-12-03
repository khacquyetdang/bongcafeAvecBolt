import { MenuItem } from '../types';

export const menuItems: MenuItem[] = {
  starters: [
    {
      id: 'starter-1',
      name: 'Velouté de Potimarron',
      description: 'Velouté onctueux de potimarron, crème de marrons et éclats de noisettes torréfiées',
      price: 12,
      category: 'starters',
      imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
      options: {
        vegetarian: true,
      },
    },
    {
      id: 'starter-2',
      name: 'Carpaccio de Saint-Jacques',
      description: 'Fines tranches de Saint-Jacques, huile d\'olive citronnée, fleur de sel et herbes fraîches',
      price: 16,
      category: 'starters',
      imageUrl: 'https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ],
  mains: [
    {
      id: 'main-1',
      name: 'Filet de Bœuf Rossini',
      description: 'Filet de bœuf, escalope de foie gras poêlée, sauce aux truffes, pommes duchesse',
      price: 34,
      category: 'mains',
      imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 'main-2',
      name: 'Risotto aux Cèpes',
      description: 'Risotto crémeux aux cèpes fraîs, parmesan affiné 24 mois et huile de truffe',
      price: 26,
      category: 'mains',
      imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      options: {
        vegetarian: true,
      },
    },
  ],
  desserts: [
    {
      id: 'dessert-1',
      name: 'Soufflé au Chocolat',
      description: 'Soufflé au chocolat noir 70%, cœur coulant et glace vanille de Madagascar',
      price: 12,
      category: 'desserts',
      imageUrl: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      options: {
        vegetarian: true,
      },
    },
    {
      id: 'dessert-2',
      name: 'Tarte au Citron Meringuée',
      description: 'Tarte au citron revisitée, meringue italienne, sorbet citron vert',
      price: 10,
      category: 'desserts',
      imageUrl: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      options: {
        vegetarian: true,
      },
    },
  ],
  drinks: [
    {
      id: 'drink-1',
      name: 'Château Margaux 2015',
      description: 'Grand vin de Bordeaux, notes de fruits noirs et d\'épices',
      price: 180,
      category: 'drinks',
      imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 'drink-2',
      name: 'Cocktail Signature',
      description: 'Gin artisanal, liqueur de violette, citron jaune et champagne',
      price: 14,
      category: 'drinks',
      imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ],
};