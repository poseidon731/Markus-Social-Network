import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

// import api_url from "../config/config";

export const UserContext = createContext([]);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState([])

  const path_json = '/fake_API/db.json'

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(path_json);
      setUser(response.data.users)
    }
    getUser();
  }, [])

  // const getUsers = async () => {
  //   try {
  //     const response = await api_url.get("/users")
  //     const data = response.data
  //     setUser(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getUsers();
  // }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
