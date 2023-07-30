const locationOptions = [
  { label: "Dhaka", value: "dhaka" },
  { label: "Jashore", value: "jashore" },
];

export default function Application() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4">
        Application Form for Your Interview
      </h1>
      <h2 className="text-center text-2xl font-medium mb-4">
        Place submit true information about yourself
      </h2>
      <form className="flex flex-col gap-2 max-w-md mx-auto p-4 bg-slate-100 border border-gray-700">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="location">Your Location:</label>
          <select name="location" id="location">
            {locationOptions.map((location) => (
              <option key={location.value}>{location.label}</option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="terms">
            <input type="checkbox" name="terms" id="terms" />I agree to the
            terms and conditions.
          </label>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="bio">Your Bio:</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <button className="p-3 border border-gray-700 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
