import React from "react";
import PropTypes from "prop-types";

const UserFormInput = ({
  label,
  type,
  value,
  name,
  handleChange,
  errorMessage,
  extraClasses,
  extraInputAtrr,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${extraClasses}`}>
      <label htmlFor={name} className="text-sm dark:text-white text-zinc-800">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
        className="border-2 dark:text-white dark:bg-transparent rounded px-2 py-1 outline-none focus:border-indigo-400"
        {...extraInputAtrr}
      />
      {errorMessage && (
        <span className="text-xs text-red-600">{errorMessage}</span>
      )}
    </div>
  );
};

UserFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserFormInput;
