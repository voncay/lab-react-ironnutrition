import { Divider } from 'antd';

const Search = ({ setQuery }) => {

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className="searchFood" style={{ margin: '20px'}}>
      <Divider>Search Food</Divider>
      <input placeholder="Search Food!" type="text" onChange={(event) => handleInputChange(event)} />
    </div>
  )
}

export default Search
