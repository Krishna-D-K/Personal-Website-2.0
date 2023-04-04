import React from 'react'
import { PortableText } from "@portabletext/react";
import * as Styles from "../styles/bodyTextStyle.module.css";
import gatsbyConfig from '../../gatsby-config';
import { getImageAsset, getImageDimensions } from '@sanity/asset-utils';
import { getSanityImage } from '../utils/getSanityImage';
import { GatsbyImage } from 'gatsby-plugin-image';

function BodyText(props) {
    const components = {
        block: {
            normal: ({ children }) => <div className={Styles.paragraph}>{children}</div>,
            blockquote: ({children}) => <div className={Styles.blockQuote}>{children}</div>
        },
        types: {
            customImage: ({value})=>{
                const imageData = getImageAsset(value.asset, gatsbyConfig.plugins[1].options);
                const {height, width} = getImageDimensions(value);
                const image={
                    url: imageData.url,
                    height: height,
                    width: width
                }
                const gatsbyImageData = getSanityImage({
                    image,
                    layout: "constrained",
                });
                return (
                    <div className={Styles.bodyImage}><GatsbyImage image={gatsbyImageData} alt={value.altText} class/></div>
                )
            }
        }
    }
    // console.log(props.data);
    return (
        <PortableText value={props.data} components={components}></PortableText>
    )
}

export default BodyText