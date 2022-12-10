import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
    <header className="has-background-primary">
        <nav className="navbar has-background-primary">
            <div className="navbar-brand">
              My Contact List
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                  <Link to={"/"} className="navbar-item">
                    Contacts
                  </Link>
                  <Link to={"/add"} className="navbar-item">
                    Add
                  </Link>
              </div>

            </div>
          </nav>
        </header>
      <div className="container">
      
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="add" element={<AddContact />} />
          <Route path="edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
