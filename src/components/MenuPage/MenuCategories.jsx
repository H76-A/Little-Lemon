import MenuItem from '../MenuPage/MenuItem';
import { menuItems } from '../../data/menuItems';
import { useState, useMemo } from 'react';

const MenuCategories = () => {
  const categoryBtns = ['Appetizers', 'Food', 'Drinks', 'Desserts'];

  const [selectedCategory, setSelectedCategory] = useState('Appetizers');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const itemsToDisplay = useMemo(() => {
    return menuItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);
  return (
    <>
      {/* Categories */}
      <nav className="px-5 pt-16 pb-6 flex flex-wrap md:flex-nowrap justify-center gap-x-10 md:gap-x-10">
        {categoryBtns.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`cursor-pointer text-xl md:text-3xl font-markazi font-bold hover:text-lightOrange  
            ${selectedCategory === category ? 'text-lightOrange' : 'text-primaryGreen'}`}>
            {category}
          </button>
        ))}
      </nav>
      {/* Menu Items */}
      <div className="py-10 px-5 flex justify-center flex-wrap gap-10">
        {itemsToDisplay.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            img={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default MenuCategories;
