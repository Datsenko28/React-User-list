import './index.scss'
import Users from './components/users';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((json) => {
      setUsers(json.data);
    }).catch(err => {
      console.warn(err);
      alert('Помилка при отриманні користувачiв');
    })
    .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="App">
      <Users 
      onChangeSearchValue={onChangeSearchValue}
      searchValue={searchValue} 
      items={users} 
      isLoading={isLoading}/>
    </div>
  );
}

export default App;
