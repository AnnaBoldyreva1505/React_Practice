import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List, ListItem } from './RecipeList.styled';

export const RecipeList = ({ items, onDelete }) => {
  return (
    <List>
      {/* мы передали onDelete пропсом сюда, но этот пропс не нужен этому фйлу, его нужно прокинуть дальше, в Recepe. Для этого можно передать его просто с темже названием. */}
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe item={item} onDelete={onDelete}/>
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
