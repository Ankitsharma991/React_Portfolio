import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { BsStackOverflow } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://Linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://GitHub.com" target="_blank"><FaGithub/></a>
      <a href="https://StackOverflow.com" target="_blank"><BsStackOverflow/></a>
    </div>
  )
}

export default HeaderSocial;
