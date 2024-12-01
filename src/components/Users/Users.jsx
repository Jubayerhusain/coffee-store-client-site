import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Users() {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  console.log("This is your user list:", users);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        {/* Table Head */}
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="text-center">{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.image} alt={`${user.name} Avatar`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{user.name}</div>
                    <div className="text-sm text-gray-500">
                      {user.location}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {user.company}
                <br />
                <span className="badge badge-ghost badge-sm mt-1">
                  {user.jobTitle}
                </span>
              </td>
              <td>{user.favoriteColor}</td>
              <td>
                <div className="flex flex-wrap gap-2">
                  <button className="btn btn-sm btn-outline btn-primary">
                    Details
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                  <Link to={`/updateUser/${user._id}`} className="btn btn-sm btn-outline btn-success">
                    Update
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
