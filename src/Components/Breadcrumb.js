import React from 'react';
import * as Styles from "../styles/breadcrumbStyles.module.css";
import { Link } from 'gatsby';

function Breadcrumb({ path }) {
  const links = path.split("/");
  var pathname = "/"
  // console.log(links)
  return (
    <>
      <div className={Styles.container}>
        <span className={Styles.link}>
          <Link to={pathname}>Home</Link> /&nbsp;
        </span>
        {links.map((address, index) => {
          if (address !== '' && index !== links.length - 2) {
            pathname += `${address}/`;
            return (
              <span className={Styles.link} key={index}>
                &nbsp;<Link to={pathname}>{address}</Link> /&nbsp;
              </span>
            )
          }
          else if (address !== '' && index === links.length - 2) {
            return (
              <span className={Styles.link} key={index}> 
                {address}
              </span>

            )
          }
          else {
            return null;
          }
        })}
      </div>
    </>
  )
}

export default Breadcrumb