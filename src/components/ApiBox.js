import React from "react";

const ApiBox = (props) => {
  return (
    // <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-10">
    //   <div class="text-center space-y-2 sm:text-left">
    //     <div class="space-y-0.5">
    //       <p class="text-lg text-black font-semibold">{props.title}</p>
    //       <p class="text-gray-500 font-medium">{props.description}</p>
    //     </div>
    //     <button class="px-4 py-1 text-sm text-purple font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
    //       Go 
    //     </button>
    //   </div>
    // </div>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 my-4 last:mt-30">
      <div className="flex-shrink-0"></div>
      <div>
        <div className="text-xl font-medium text-orange">{props.title}</div>
        <p className="text-purple font-medium">{props.description}</p>
      </div>
    </div>
  );
};

export default ApiBox;
