import FoodBox from './FoodBox'
import { Divider } from 'antd';

const FoodList = (props) => {

  const { foodList, setFoodList } = props

  return(
    <>
    <Divider>Food List</Divider>
    {foodList.map( (e, i) => {
      return(
        <FoodBox key={i} food={e} setFoodList={setFoodList}/>
      )
    })}
    </>
  )
}

export default FoodList
