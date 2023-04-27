import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

export const RecipeList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Recipe item={item} />
        </li>
      ))}
    </ul>
  );
};

// в фунцию мы передаем пропс (объект), в этом примере items это деструктуризированный свойство items


RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,})
  
  ).isRequired,
}
