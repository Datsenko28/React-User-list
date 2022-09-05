import './index.scss'
import Users from './components/users';
import { useEffect, useState } from 'react';

function App() {
  const [users, SetUsers] = useState();
  const [isLoading, SetLoading] = useState(true);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      SetUsers(json.data);
    }).catch(err => {
      console.warn(err);
      alert('Помилка при отриманні користувачiв')
    })
  }, [])

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading}/>
    </div>
  );
}

export default App;
