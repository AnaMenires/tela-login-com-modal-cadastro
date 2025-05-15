import React from "react";

const ButtonModal = ( {label, }) => {
  return (
    <div>
      <button
        type="button"
        className="w-full rounded-md bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500">
        {label}
      </button>
    </div>
  );
};

export default ButtonModal;
