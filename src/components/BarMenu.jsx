import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// Icons
import { FaReact, FaUserAstronaut } from "react-icons/fa";
import { HiMenuAlt2, HiPlusSm, HiHome } from "react-icons/hi";
import { BsGearFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";

function BarMenu(props) {
  
  let { url } = useRouteMatch();

  return (
      <div className="BarMenu">
        <FaReact className="icon" />
        <hr/>
        <div className="icon__container">
          <div className="icon__container-center">

            <Link to={`${url}/codes`}><HiHome className="icon icon__element-smaller" /></Link>
            

            <HiMenuAlt2 className="icon icon__element-smaller" />
            <BiSearchAlt2 className="icon icon__element-smaller" />
            <BsGearFill className="icon icon__element-smaller" />
          </div>
          <div className="icon__container-botton">
            <FaUserAstronaut className="icon icon__element-smaller" />
            <hr/>
            <span>
              <HiPlusSm className="icon icon__element-smaller" />
            </span>
          </div>
        </div>
        
      </div>
  )
}

export default BarMenu;