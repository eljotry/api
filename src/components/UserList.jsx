import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, CircularProgress } from "@mui/material";
import useFetch from "../hooks/useFetch";

const UserList = () => {
  const { data: users, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <CircularProgress />;

  return (
    <List>
      {users.map((user) => (
        <ListItem
          button
          key={user.id}
          component={Link}
          to={`/users/${user.id}`}
        >
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
