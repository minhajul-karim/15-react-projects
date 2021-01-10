import React, { useEffect, useState } from 'react'

export default function GroceryForm({
  addGrocery,
  nameToEdit,
  textInput,
  hasRemovedGrocery,
  changeRemoveStatus,
  hasRemovedAll,
  changeRemoveAllStatus,
}) {
  const [groceryName, setGroceryName] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [successAlert, setSuccessAlert] = useState('')

  // Hides alert message after 3 seconds
  const hideAlert = () => {
    const timeoutId = setTimeout(() => {
      setSuccessAlert('')
      return () => clearTimeout(timeoutId)
    }, 3000)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    addGrocery({ name: groceryName, id: Date.now() })
    setGroceryName('')
    nameToEdit
      ? setSuccessAlert('Item edited!')
      : setSuccessAlert('Item added!')
    hideAlert()
  }

  // Enable-disable submit button
  useEffect(() => {
    if (groceryName.length === 0) setIsButtonDisabled(true)
    else setIsButtonDisabled(false)
  }, [groceryName])

  // Display grocery name in the form in order to edit
  useEffect(() => {
    if (nameToEdit) {
      const name = nameToEdit.split(',')[0]
      setGroceryName(name)
      textInput.current.focus()
    }
  }, [nameToEdit, textInput])

  // Display alert for remove items
  useEffect(() => {
    if (hasRemovedGrocery) {
      setSuccessAlert('Item Removed!')
      changeRemoveStatus()
      hideAlert()
    }
  }, [hasRemovedGrocery, changeRemoveStatus])

  // Display alert for remove all items
  useEffect(() => {
    if (hasRemovedAll) {
      setSuccessAlert('Cleared All!')
      changeRemoveAllStatus()
      hideAlert()
    }
  }, [hasRemovedAll, changeRemoveAllStatus])

  return (
    <form className="grocery-form" onSubmit={submitHandler}>
      <p className={`alert ${successAlert.length > 0 && 'alert-success'}`}>
        {successAlert}
      </p>
      <h3>Groceries</h3>
      <div className="form-control">
        <label htmlFor="name">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            id="name"
            value={groceryName}
            onChange={(e) => setGroceryName(e.target.value)}
            ref={textInput}
          />
        </label>
        <button
          type="submit"
          className="submit-btn"
          aria-label="save grocery"
          disabled={isButtonDisabled}
        >
          Add
        </button>
      </div>
    </form>
  )
}
