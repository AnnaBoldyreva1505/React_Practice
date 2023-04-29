import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List, ListItem } from './RecipeList.styled';

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe item={item} />
        </ListItem>
      ))}
    </List>
  );
};

// в фунцию мы передаем пропс (объект), в этом примере items это деструктуризированный свойство items


RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,})
  
  ).isRequired,
}
