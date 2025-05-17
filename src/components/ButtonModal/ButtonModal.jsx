
const ButtonModal = ( {label, onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="w-full rounded-md bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500">
        {label}
      </button>
    </div>
  );
};

export default ButtonModal;
