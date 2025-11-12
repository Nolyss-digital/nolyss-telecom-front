/**
 * @module Element-Avert-Image
 */

import { publicUrlFor } from "../common-functions";

/**
 * Image loader from public folder for given source
 * @param props - image properties
 * @returns - markup for custom image element
 */
const AvertImage = (props: any) => {
    return <img {...props} src={publicUrlFor(props.src)} alt={props.alt} />
}

export default AvertImage;