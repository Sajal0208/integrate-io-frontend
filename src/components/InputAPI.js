import React from "react";
import styles from "../styles/DevDotTo.module.css";

const InputAPI = ({ submitApiHandler, apikey, setApikey }) => {
  return (
    <div className={styles.dev_body}>
      <form
        onSubmit={submitApiHandler}
        className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
      >
        <div className=" relative ">
          <input
            type="text"
            id="form-subscribe-Subscribe"
            value={apikey}
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="api-key"
            onChange={(e) => setApikey(e.target.value)}
          />
        </div>
        <div>
          <button
            className=" px-4 py-2 text-base font-semibold text-white bg-purple rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputAPI;
