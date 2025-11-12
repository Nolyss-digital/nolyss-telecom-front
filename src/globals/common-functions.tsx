/**
 * Defines various functions used accross template
 * @module Common-Functions
 */

import { route } from "./constants"

/**
 * Provides complete URL to follow navigation
 */
export const navUrl = {
    services(target: string) {
        return route.services.INITIAL + target
    },
    pages(target: string) {
        return route.pages.INITIAL + target
    },
    blogs(target: string) {
        return route.blogs.INITIAL + target
    }
}

/**
 * Refers a normal asset path to public folder
 * @param path : assets path required
 * @returns : assets path referencing public folder
 */
export const publicUrlFor = (path: string) => {
    return process.env.PUBLIC_URL + "/assets/" + path;
}

/**
 * Used to load a asset separately
 * @param src : source file URL
 * @returns : loads desired file from assets
 */
export const loadScript = (src: string) => {

    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');

        script.src = publicUrlFor(src);

        script.addEventListener('load', function (e) {
            resolve(e);
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });

        setTimeout(() => {
            document.body.removeChild(script);
        }, 1500);
        document.body.appendChild(script);
    })
};