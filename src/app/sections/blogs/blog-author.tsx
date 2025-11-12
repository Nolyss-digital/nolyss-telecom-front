/**
 * @module Section-Blog-Author
 */

import { TypeSectionAuthor } from "../../@types/sectionTypes";
import AvertImage from "../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display blog author
 * @returns Markup for section showing blog author's detail
 */
const SectionBlogAuthor = (props: {
    _author: TypeSectionAuthor
}) => {
    const { _author } = props;
    return (
        <div className="av-blog-detail-author site-bg-gray">
            <div className="av-media">
                <AvertImage src={_author.image} alt="image" />
            </div>
            <div className="av-content">
                <div className="av-author-top">
                    <h3 className="av-title">
                        {_author.name}
                    </h3>
                    <ul className="social-icons-sm">
                        <li><a href={_author.fb} className="fa-brands fa-facebook-f"> </a></li>
                        <li><a href={_author.x} className="fa-brands fa-x-twitter"> </a></li>
                        <li><a href={_author.insta} className="fa-brands fa-instagram"> </a></li>
                        <li><a href={_author.lin} className="fa-brands fa-linkedin-in"> </a></li>
                    </ul>
                </div>
                <p>{_author.about}</p>
            </div>
        </div>
    )
}

export default SectionBlogAuthor;