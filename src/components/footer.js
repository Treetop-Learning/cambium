import PropTypes from "prop-types"
import React from "react"

import logo from "../static/logo.svg"
import "../css/global.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../components/button"

import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faTwitter, faFacebook, faGithub)

const footerColor = {
  background: "linear-gradient(180deg, rgba(133,93,81,1) 0%, rgba(164,129,119,1) 100%, rgba(168,134,124,1) 100%)"
}

const Footer = () => (
  <div className="flex flex-row h-auto pt-8 pb-8 font-mono bg-bark" style={footerColor}>
    <div className="hidden w-1/6 md:flex"></div>
    <div className="flex flex-col w-full p-8 font-hairline text-white md:p-0 md:w-4/6">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex-col mb-10 w-100 md:w-1/2 md:mb-0">
          <p className="mb-8">
            A free computer science education for any and all marginalized students -{" "}
            <span className="font-extrabold"> that’s our promise. </span>
          </p>
          <p className="mb-8">
            Treetop Learning is not a registered 501(c)(3) nonprofit organization.
<<<<<<< HEAD
            <a className="ml-1 underline" href="donate">
=======
            <a className="ml-1 underline" href="#donatepage">
>>>>>>> 36de79ffa683d83623f40f25ca9131100fd2a77a
              Donate today.
            </a>
          </p>
          <div className="flex">
            <Button text="Join our newsletter" url={"https://cdn.forms-content.sg-form.com/f99cddf4-b193-11ea-a875-5aa83703c24e"} isTitle={false} />
          </div>
        </div>
        <div className="">
          <img
            className="self-end justify-center w-full h-48 p-10 bg-white lg:h-64 lg:w-64 md:w-48 rounded-xl"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex justify-between mt-8">
        <div className="flex flex-col md:flex-row">
          {/* <p className="mr-8"> Sponsor </p>
          <p className="mr-8"> Sponsor </p>
          <p className="mr-8"> Sponsor </p>
          <p className="mr-8"> Sponsor </p> */}
        </div>
        <div className="flex">
          <a className="max-w-md ml-8 transition duration-100 ease-in-out hover:opacity-75" href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="max-w-md ml-8 duration-100 ease-in-out hover:opacity-75" href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="max-w-md ml-8 duration-100 ease-in-out hover:opacity-75"
            href="https://github.com/Treetop-Learning/cambium"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
    <div className="hidden w-1/6 md:flex"></div>
  </div>
)

Footer.propTypes = {
  source: PropTypes.string
}

Footer.defaultProps = {}

export default Footer
