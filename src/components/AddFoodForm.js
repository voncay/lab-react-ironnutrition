import { Divider, Input } from 'antd';
import { useState } from 'react'

const AddFoodForm = (props) => {

  const { foodList, setFoodList } = props

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handleImageChange = event => {
      setImage(event.target.value)
  }
  const handleCaloriesChange = event => {
      setCalories(event.target.value)
  }
  const handleServingsChange = event => {
      setServings(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const newFoodItem = {
      name,
      image,
      calories,
      servings
    }
    
    // Add new food item to food list
    setFoodList([newFoodItem, ...foodList])

    // reset
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  }

  return(
    <div id="foodForm" style={{ display: 'none', justifyContent: 'center'}}>
      <form onSubmit={handleSubmit} style={{ width: '70%', margin: '10px', textAlign: 'center'}}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={handleNameChange} />

        <label>Image (url)</label>
        <Input value={image} type="text" onChange={handleImageChange} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={handleCaloriesChange} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={handleServingsChange} />

        <button type="submit">Add Food Item</button>
      </form>
    </div>
  )
}

export default AddFoodForm