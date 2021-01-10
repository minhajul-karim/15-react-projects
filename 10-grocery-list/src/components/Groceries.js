import GroceryItem from './GroceryItem'

export default function Groceries({
  groceryList,
  removeGrocery,
  getNameToEdit,
}) {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {groceryList.map((item, index) => (
          <GroceryItem
            key={item}
            groceryName={item}
            removeGrocery={removeGrocery}
            getNameToEdit={getNameToEdit}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
