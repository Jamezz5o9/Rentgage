import React from "react";
import RContainer from "../atoms/RContainer";
import TwitterIcon from '../../../assets/icons/twitter-logo.svg'
import InstagramIcon from '../../../assets/icons/instagram-logo.svg'
import LinkedInIcon from '../../../assets/icons/linkedin-logo.svg'
import RImage from "../atoms/RImage";

const RFooter = () => {
  return (
    <footer className="bg-app-dark-blue py-16 text-center text-white">
      <RContainer>
        <p>
          We would love to build a community with you in it.
          <br />
          Follow our social media pages to be a part of our growing community.
        </p>

        <div className="flex items-center justify-center gap-8 mt-10">
          <RImage src={TwitterIcon} className="h-10" />
          <RImage src={InstagramIcon} className="h-10" />
          <RImage src={LinkedInIcon} className="h-10" />
        </div>

        <p className="mt-20">
          Copyright ©Rentgage 2021. All rights reserved.
        </p>
      </RContainer>
    </footer>
  )
}

export default RFooter
