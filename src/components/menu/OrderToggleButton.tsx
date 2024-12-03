import React from 'react';

interface OrderToggleButtonProps {
  showOrdering: boolean;
  onToggle: () => void;
}

const OrderToggleButton: React.FC<OrderToggleButtonProps> = ({ showOrdering, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
    >
      {showOrdering ? 'Voir le menu' : 'Commander en ligne'}
    </button>
  );
};

export default OrderToggleButton;