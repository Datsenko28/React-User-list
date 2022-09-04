import './index.scss'
import Users from './components/users';
import { useEffect, useState } from 'react';

function App() {
  const [users, SetUsers] = useState();

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      SetUsers(json.data);
    }).catch(err => {
      console.warn(err);
      alert('Помилка при отриманні користувачів')
    })
  }, [])

  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
