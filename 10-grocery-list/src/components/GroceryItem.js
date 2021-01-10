import { FaEdit, FaTrash } from 'react-icons/fa'

export default function GroceryItem({
  groceryName,
  removeGrocery,
  getNameToEdit,
  index,
}) {
  return (
    <article className="grocery-item">
      <p className="title">{groceryName}</p>
      <div className="btn-container">
        <FaEdit
          className="edit-btn"
          onClick={() => getNameToEdit(groceryName, index)}
        />
        <FaTrash
          className="delete-btn"
          onClick={() => removeGrocery(groceryName)}
        />
      </div>
    </article>
  )
}
