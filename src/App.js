// import './App.css';
import foods from './foods.json'
import { Row, Button } from 'antd';
import { useState} from 'react'
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import Search from './components/Search';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const [query, setQuery] = useState('');
  const [hide, setHide] = useState(true);

  const filtered = foodList.filter( (e) => {  // infinite loop when moved to search component -_-'
      return e.name.toLowerCase().includes( query.toLowerCase());
    }
  )

  const hideForm = () => { 
    const element = document.getElementById('foodForm');
    if (element.style.display === "none") {
      element.style.display = "block";
      setHide(false);
    } else {
      element.style.display = "none";
      setHide(true);
    }
  } 

  return (
    <div className="App">
      <AddFoodForm foodList={foodList} setFoodList={setFoodList} />

      <Button style={{margin: '20px'}} type="primary" onClick={ () => hideForm()}>
        {hide ? "Add New Food" : "Hide Form"}
      </Button>

      <Search setQuery={setQuery}/>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodList foodList={filtered} setFoodList={setFoodList} />
      </Row>
    </div>
  );
}

export default App;
