import React from "react";
import { useLoaderData } from "react-router-dom";

function UpdateUser() {
  const user = useLoaderData();
  console.log(user);

  const updateUserData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const location = form.location.value;
    const company = form.company.value;
    const jobTitle = form.jobTitle.value;
    const favoriteColor = form.favoriteColor.value;
    const userUpdateData = {
      name,
      location,
      company,
      jobTitle,
      favoriteColor,
    };
    console.log("Updated User Data:", userUpdateData);

    fetch(`http://localhost:5000/users/${user._id}`,
        {
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userUpdateData)
        }
    )

    
  };

  return (
    <div className="py-36 flex items-center mx-auto justify-center bg-gray-900 bg-opacity-80">
      <div className="bg-gray-800 p-6 rounded shadow-lg w-96 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">
          Update User: {user?.name}
        </h2>
        <form onSubmit={updateUserData}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1 text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              className="input input-bordered w-full bg-gray-700 text-gray-200 border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1 text-gray-300">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={user?.location}
              className="input input-bordered w-full bg-gray-700 text-gray-200 border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1 text-gray-300">
              Company
            </label>
            <input
              type="text"
              name="company"
              defaultValue={user?.company}
              className="input input-bordered w-full bg-gray-700 text-gray-200 border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1 text-gray-300">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              defaultValue={user?.jobTitle}
              className="input input-bordered w-full bg-gray-700 text-gray-200 border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1 text-gray-300">
              Favorite Color
            </label>
            <input
              type="text"
              name="favoriteColor"
              defaultValue={user?.favColor}
              className="input input-bordered w-full bg-gray-700 text-gray-200 border-gray-600"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-gray-100"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
