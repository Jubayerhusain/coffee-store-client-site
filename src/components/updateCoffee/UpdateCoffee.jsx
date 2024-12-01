import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateCoffee() {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const updateCoffeeHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const chef = form.chef.value.trim();
    const supplier = form.supplier.value.trim();
    const taste = form.taste.value.trim();
    const category = form.category.value.trim();
    const details = form.details.value.trim();
    const photo = form.photo.value.trim();

    // Validation
    if (!name || !chef || !supplier || !taste || !category || !details || !photo) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const updateCoffee = { name, chef, supplier, taste, category, details, photo };

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          Update Coffee: {name}
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Update the details of the coffee to keep your list up to date.
        </p>
        <form
          onSubmit={updateCoffeeHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-white w-full md:w-1/3"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCoffee;
