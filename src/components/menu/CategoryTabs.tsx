import React from 'react';
import { Category } from '../../types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-orange-600 text-white'
                : 'text-gray-500 hover:text-orange-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;