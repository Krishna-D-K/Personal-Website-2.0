import React from 'react';
import * as Styles from "../styles/breadcrumbStyles.module.css";
import { Link } from 'gatsby';

function Breadcrumb({ path }) {
  const links = path.split("/");
  var path = "/"
  // console.log(links)
  return (
    <>
      <div className={Styles.container}>
        <span className={Styles.link}>
          <Link to={path}>Home</Link> /&nbsp;
        </span>
        {links.map((address, index) => {
          if (address !== '' && index !== links.length - 2) {
            path += `${address}/`;
            return (
              <span className={Styles.link}>
                &nbsp;<Link to={path}>{address}</Link> /&nbsp;
              </span>
            )
          }
          else if (address !== '' && index === links.length - 2) {
            return (
              <span className={Styles.link}>
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