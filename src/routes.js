import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import MembersPage from "./pages/MembersPage";
import GroupsPage from "./pages/GroupsPage";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Users from "./pages/Users";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const MainRoutes = () => {

  return (
      <Routes>
        <Route path="/" element={<Feed /> } />
        <Route path="/membros" element={<MembersPage /> } />
        <Route path="/grupos" element={<GroupsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />
        <Route path="/membros/:id" element={<Users />}/>
        <Route path="/pagina-em-construcao" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default MainRoutes;