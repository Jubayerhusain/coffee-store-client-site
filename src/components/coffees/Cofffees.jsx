import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function Coffees() {
  const loadcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadcoffees);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Only send DELETE request after confirmation
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "The coffee has been deleted successfully.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h1>Coffee List ({coffees.length})</h1>
      <h1 className="text-2xl font-bold text-gray-400 text-center my-10">
        Our Popular Coffees
      </h1>
      <div className="grid grid-cols-2 gap-8 w-10/12 mx-auto">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="flex justify-between border-2 rounded-xl shadow-2xl p-5"
          >
            <div>
              <img src={coffee.photo} alt={coffee.name} />
            </div>
            <div>
              <p>Chef: {coffee.chef}</p>
              <p>Name: {coffee.name}</p>
              <p>Details: {coffee.details}</p>
            </div>
            <div className="join join-vertical space-y-3">
            <Link to={`/coffeeDetails/${coffee._id}`}>
            <button className="btn">View</button>
            </Link>
              <Link to={`/updateCoffee/${coffee._id}`}>
                <button className="btn">Update</button>
              </Link>
              <button
                onClick={() => {
                  handleDelete(coffee._id);
                }}
                className="btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coffees;
