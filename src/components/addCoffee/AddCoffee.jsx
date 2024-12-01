import Swal from "sweetalert2";

function AddCoffee() {
  const addCoffeeHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const chef = form.chef.value.trim();
    const supplier = form.supplier.value.trim();
    const taste = form.taste.value.trim();
    const category = form.category.value.trim();
    const details = form.details.value.trim();
    const photo = form.photo.value.trim();

    // Form validation
    if (!name || !chef || !supplier || !taste || !category || !details || !photo) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Coffee data object
    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    // API call
    fetch(`http://localhost:5000/coffees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset(); // Clear the form after successful submission
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">Add New Coffee</h1>
        <p className="text-center text-gray-400 mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form
          onSubmit={addCoffeeHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-200">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              aria-label="Coffee Name"
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
              placeholder="Enter coffee chef"
              aria-label="Coffee Chef"
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
              placeholder="Enter coffee supplier"
              aria-label="Coffee Supplier"
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
              placeholder="Enter coffee taste"
              aria-label="Coffee Taste"
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
              placeholder="Enter coffee category"
              aria-label="Coffee Category"
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
              placeholder="Enter coffee details"
              aria-label="Coffee Details"
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
              placeholder="Enter photo URL"
              aria-label="Photo URL"
              className="input input-bordered w-full bg-gray-700 text-gray-100 placeholder-gray-400 border-gray-600"
            />
          </div>
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-white w-full md:w-1/3"
              aria-label="Add Coffee Button"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCoffee;
