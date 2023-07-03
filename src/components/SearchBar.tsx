// import React, { FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

// Define the type of from data
type FormData = {
  subs: string;
};

// Define the SearchBar component
const SearchBar: React.FC = () => {
  // Initialize the from and extract from methods and state using the useForm hook
  const {
    register, // function to register form inputs
    handleSubmit, // function to handle form submissions
    formState: { errors }, // form validation errors
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      subs: "",
    },
  });

  // Define the function to be executed when the form is submitted
  const onSubmit: SubmitHandler<FormData> = () => {
    toast.success("Subscribed successful!"); // show succes toast message
  };

  // const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   handleFormSubmit(onSubmit)(event);
  // };

  // Handle form submission using the handleSubmit function from react-hook-form
  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  // Render the SearchBar component
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex gap-4 md:flex-col md:items-center"
    >
      <div className="flex flex-col">
        {/* Input field for email subscription */}
        <input
          id="subs"
          {...register("subs", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please insert a valid email",
            },
          })}
          placeholder="Updates in your inbox..."
          className={`rounded-full border px-7 py-3 text-BRed hover:border-BRed transition outline-none focus:border-BRed ${
            errors.subs ? "border-BRed/75" : ""
          }`}
        />
        {/* Display error message if there are validation errors */}
        {errors.subs && (
          <i className="text-BRed/75 text-sm ml-7 mt-1">
            {errors.subs.message}
          </i>
        )}
      </div>
      {/* <button
        type="submit"
        className="py-3 px-7 h-[53px] rounded-full bg-BRed hover:BRed transition"
      >
        Go
      </button> */}
      {/* Cumtom button component for form submission */}
      {/* <Button label="Go" /> */}
      <button className="w-[75px] py-3 bg-BRed rounded-full text-VLightGray shadow-BRed/30 shadow-[_0px_10px_20px] hover:animate-pulse">
        Go
      </button>
      {/* Component for displaying toast notification */}
      <Toaster />
    </form>
  );
};

export default SearchBar;
