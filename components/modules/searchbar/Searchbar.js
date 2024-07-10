import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Searchbar() {
  const router = useRouter();

  let [formData, updateFormData] = useState({ min: 0, max: 0 });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    updateFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/cars/price-range/${formData.min}/${formData.max}`);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 w-[400px] shadow-xl mt-12 rounded-md px-1 py-2">
        <div className="flex flex-col gap-2 w-full">
          <input
            name="min"
            onChange={handleChange}
            value={formData["min"]}
            className="px-4 py-1 rounded-md outline-none ring-1 ring-gray-300 focus:ring-[#befa00]"
            type="number"
            required
            placeholder="enter minimum price"
          />
          <input
            name="max"
            onChange={handleChange}
            value={formData["max"]}
            className="px-4 py-1 rounded-md outline-none ring-1 ring-gray-300 focus:ring-[#befa00]"
            type="number"
            required
            placeholder="enter maximum price"
          />
        </div>
        <button
          type="submit"
          className="bg-[#befa00] text-sm px-2 py-4 font-bold rounded-md"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
