import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {

  const { food, setFoodList } = props

  const removeFood = (foodItem) => {
    setFoodList(current =>
      current.filter(e => {
        return e.name !== foodItem;
      })
    )
  }

  return(
    <Col>
      <Card // style={{ padding: '5px'}}  // fix that padding in antd custon theme somehow
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={ () => removeFood(food.name)}> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox
