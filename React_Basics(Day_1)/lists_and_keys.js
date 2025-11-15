/*What are Lists & Keys?
Lists: When you want to display multiple items in React, you usually loop over an array.

Keys: A unique identifier for each item in the list. 
React uses keys to track which items have changed, added, or removed, 
so it can update the UI efficiently.*/

import React from "react";

function UserList() {
  // An array of users
  const users = ["Ram", "Shyam", "Hari"];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {/* Loop through users and create <li> for each */}
        {users.map((u, i) => (
          // 'key' helps React identify each list item uniquely
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
