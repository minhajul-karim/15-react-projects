import React, { useState, useEffect, useRef } from 'react'

import GroceryItem from './components/GroceryItem'
import GroceryForm from './components/GroceryForm'

function App() {
  const [groceryList, setGroceryList] = useState([])
  const [nameToEdit, setNameToEdit] = useState('')
  const [editIndex, setEditIndex] = useState('')
  const [hasRemovedGrocery, setHasRemovedGrocery] = useState(false)
  const [hasRemovedAll, setHasRemovedAll] = useState(false)
  const textInput = useRef(null)

  const changeRemoveStatus = () => {
    setHasRemovedGrocery(false)
  }

  const changeRemoveAllStatus = () => {
    setHasRemovedAll(false)
  }

  const getNameToEdit = (name, index) => {
    // Append a random string to make every state unique
    setNameToEdit(`${name},${Date.now()}`)
    setEditIndex(index)
  }

  const addGrocery = (name) => {
    if (nameToEdit) {
      const tempList = [...groceryList]
      tempList[editIndex] = name
      setGroceryList(tempList)
      setNameToEdit('')
      setEditIndex('')
    } else setGroceryList([...groceryList, name])
  }

  const removeGrocery = (name) => {
    const newList = groceryList.filter((item) => item.name !== name)
    // Save new list to localStorage
    localStorage.setItem('groceries', JSON.stringify(newList))
    // Update state
    setGroceryList(newList)
    setHasRemovedGrocery(true)
  }

  const removeAllItems = () => {
    setGroceryList([])
    localStorage.removeItem('groceries')
    setHasRemovedAll(true)
  }

  // Save groceries to localStorage
  useEffect(() => {
    if (groceryList.length > 0) {
      localStorage.setItem('groceries', JSON.stringify(groceryList))
    }
  }, [groceryList])

  // Load groceries from localstorage
  useEffect(() => {
    const localGroceryStr = localStorage.getItem('groceries')
    if (localGroceryStr !== null) {
      const localGroceryArr = JSON.parse(localGroceryStr)
      setGroceryList(localGroceryArr)
    }
  }, [])

  return (
    <section className="section-center">
      <GroceryForm
        addGrocery={addGrocery}
        nameToEdit={nameToEdit}
        textInput={textInput}
        hasRemovedGrocery={hasRemovedGrocery}
        changeRemoveStatus={changeRemoveStatus}
        hasRemovedAll={hasRemovedAll}
        changeRemoveAllStatus={changeRemoveAllStatus}
      />
      <div className="grocery-container">
        <div className="grocery-list">
          {groceryList.map((item, index) => (
            <GroceryItem
              key={item.id}
              groceryName={item.name}
              removeGrocery={removeGrocery}
              getNameToEdit={getNameToEdit}
              index={index}
            />
          ))}
        </div>
        {groceryList.length > 0 && (
          <button className="clear-btn" type="submit" onClick={removeAllItems}>
            Clear Items
          </button>
        )}
      </div>
    </section>
  )
}

export default App
