import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApplicationList from "./pages/ApplicationList";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationSummary from "./components/ApplicationSummary";
import FormSetup from "./components/FormValidation";
import JobCard from "./components/JobCard";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import UserProvider from "./context/UserContext";
import Navbar from './components/Navbar'

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
          <Navbar/>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="applications" element={<ApplicationList />} />
              <Route
                path="/applications/:id"
                element={<ApplicationSummary />}
              />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/form" element={<ApplicationForm />} />
              <Route path="/form/:id" element={<ApplicationForm />} />
              <Route path="/form-setup" element={<FormSetup />} />
              <Route path="/job-card" element={<JobCard />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;
