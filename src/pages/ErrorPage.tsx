import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-svh">
      <div>
        <h3 className="font-bold, text-center text-4xl text-red-500 mb-10">
          Page not found!
        </h3>
        <Link
          className="block max-w-60 rounded-lg mx-auto bg-slate-300 text-center p-4 font-bold"
          to={"/"}
        >
          return to main page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
