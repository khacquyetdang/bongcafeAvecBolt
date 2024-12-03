import React from 'react';
import OrderToggleButton from './OrderToggleButton';

interface MenuHeaderProps {
  showOrdering: boolean;
  onToggleOrdering: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ showOrdering, onToggleOrdering }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">Notre Carte</h1>
      <OrderToggleButton showOrdering={showOrdering} onToggle={onToggleOrdering} />
    </div>
  );
};

export default MenuHeader;