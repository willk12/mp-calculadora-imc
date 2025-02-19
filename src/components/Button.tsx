import { LabelHTMLAttributes } from "react"


const Button = ({children, ...props}: LabelHTMLAttributes<HTMLButtonElement>& {children: React.ReactNode}) => {
  return (
    <button {...props} className="mt-6 bg-rose-400 text-white font-bold w-full p-3 rounded cursor-pointer ">
           {children}
          </button>
  )
}

export default Button