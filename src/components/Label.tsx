import React, {LabelHTMLAttributes} from "react";


const Label = ({ children, ...props}: LabelHTMLAttributes<HTMLLabelElement>& {children: React.ReactNode ,}) => {
  return (
    <label
    {...props}
      className="block text-neutral-600 font-light text-sm"
    >
      {children}
    </label>
  );
};

export default Label;
