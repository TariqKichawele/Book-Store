
// eslint-disable-next-line react/prop-types
const InputField = ({ label, type, name, register, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name,  { required: true })}
        className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputField