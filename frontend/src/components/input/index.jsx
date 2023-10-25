import { forwardRef } from "react"

const InputComponent = forwardRef(({ label, ...props }, ref) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input {...props} ref={ref} className="form-control"/>
    </>
  )
})

export default InputComponent 
