import React, { createContext, useEffect, useState } from "react";

import axios from "axios";
// import api_url from "../config/config";

export const GroupContext = createContext([]);

export const GroupProvider = ({children}) => {


  const [group, setGroup] = useState([])

  const path_json = '/fake_API/db.json'

  useEffect(() => {
    const getGroup = async () => {
      const response = await axios.get(path_json);
      setGroup(response.data.groups)
    }
    getGroup();
  }, []);

  // const getGroups = async () => {
  //   try {
  //     const response = await api_url.get("/groups");
  //     const data = response.data
  //     setGroup(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getGroups();
  // })

  return (
    <GroupContext.Provider value={{group}}>
      {children}
    </GroupContext.Provider>
  )
}

