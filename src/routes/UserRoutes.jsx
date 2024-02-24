import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/navbar";
import { RegisterPages } from "../pages/RegisterPages";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = () => {
  return (
    <>
      <UserProvider>
        <Navbar/>
        <Routes>
          <Route path="users" element={<UsersPage />} />
          <Route path="users/register" element={<RegisterPages />} />
          <Route path="users/edit/:id" element={<RegisterPages />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
