import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import ShowAccount from "./account/Show-account";
import CreateAccount from "./account/Create-account";
import EditAccount from "./account/Edit-account";
import DeleteAccount from "./account/Delete-account";
function App() {
  return (
    <div>
      <Routes>
          <Route path={"/"} element={<ShowAccount/>}/>
          <Route path={"/create"} element={<CreateAccount/>}/>
          <Route path={"/edit"} element={<EditAccount/>}/>
          <Route path={"/delete/:id"} element={<DeleteAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
