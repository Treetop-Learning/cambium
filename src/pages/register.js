import React from "react"
import RegisterForm from "../components/registerform"

import mentorship from "../static/mentorship.svg"

import "../css/global.css"

const bodyColor = {
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
}

const RegisterPage = () => (
  <div className="flex flex-col">
    <div className="flex justify-center w-full mt-32 align-bottom">
      <img src={mentorship} alt="mentorship" />
    </div>

    <div className="flex flex-col w-full bg-base" style={bodyColor}>
      <RegisterForm />
    </div>
  </div>
)

export default RegisterPage