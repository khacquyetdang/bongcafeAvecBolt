import React, { useState } from 'react';
import { menuItems } from '../data/menu';
import MenuSection from '../components/menu/MenuSection';
import OrderingSystem from '../components/ordering/OrderingSystem';
import CategoryTabs from '../components/menu/CategoryTabs';
import MenuHeader from '../components/menu/MenuHeader';
import { MENU_CATEGORIES } from '../constants/menuCategories';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('starters');
  const [showOrdering, setShowOrdering] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const toggleOrdering = () => {
    setShowOrdering(!showOrdering);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <MenuHeader 
            showOrdering={showOrdering} 
            onToggleOrdering={toggleOrdering} 
          />

          {showOrdering ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Commande en ligne</h2>
              <OrderingSystem 
                restaurantId="VOTRE_ID_RESTAURANT" 
                language="fr"
              />
            </div>
          ) : (
            <>
              <CategoryTabs
                categories={MENU_CATEGORIES}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />

              <MenuSection
                title={MENU_CATEGORIES.find(c => c.id === activeCategory)?.name || ''}
                items={menuItems[activeCategory]}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;