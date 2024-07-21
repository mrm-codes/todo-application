import logo from './logo.svg';
import './App.css';
import ProjectManager from './Task Management/ProjectManager';
import RegisterUser from './User Management/Create User/RegisterUser';
import LoginUser from './User Management/Create User/Login';



function App() {
  return (
    <div className="App">
      <div className='User-Management'>
        <RegisterUser/>
        <h3>Next</h3>
        <LoginUser/>
      </div>
      <div className='Task-Managment'></div>
    </div>
  );
}


export default App;
