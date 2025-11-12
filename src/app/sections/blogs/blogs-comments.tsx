/**
 * @module Section-Blog-Comments
 */

import { TypeBlogComment, TypeCommentBody } from "../../@types/reusableTypes";
import { TypeSectionBlogComment } from "../../@types/sectionTypes";
import AvertImage from "../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display comments received
 * @returns Markup for comments
 */
const SectionBlogComments = (props: {
    _comments: TypeSectionBlogComment
}) => {
    const { _comments } = props;
    return (
        <>
            <h3 className="comment-head-title">{_comments.count} Comments</h3>
            <div>
                {/* COMMENT LIST START */}
                <SectionBlogCommentList _comments={_comments.comments} />
                {/* COMMENT LIST END */}

                {/* LEAVE A REPLY START */}
                <SectionBlogLeaveAReply />
                {/* LEAVE A REPLY END */}
            </div>
        </>
    )
}

/**
 * 
 * @param props : Data supplied to display comments received
 * @returns Markup for comment list
 * @notExported
 */
const SectionBlogCommentList = (props: {
    _comments: TypeBlogComment[]
}) => {
    const { _comments } = props;
    return (
        <ol className="comment-list">
            {
                _comments.length > 0 &&
                _comments.map((_item, _index) => {
                    return (
                        <li key={_index} className="comment">
                            {/* COMMENT BLOCK */}
                            <SectionBlogCommentBody _comment={_item.initial} />

                            {
                                (_item.reply && _item.reply!.length > 0) &&
                                _item.reply!.map((_rItem, _rIndex) => {
                                    return (
                                        <div key={_rIndex} className="children">
                                            <SectionBlogCommentBody _comment={_rItem} />
                                        </div>
                                    )
                                })
                            }
                        </li>
                    )
                })
            }
        </ol>
    )
}

/**
 * 
 * @param props : Data supplied to display a single comment
 * @returns Markup for comment body
 * @notExported
 */
const SectionBlogCommentBody = (props: {
    _comment: TypeCommentBody
}) => {
    const _item = props._comment;
    return (
        <div className="comment-body">
            <div className="comment-author">
                <AvertImage className="avatar photo" src={_item.image} alt="" />
            </div>
            <div className="comment-info">
                <cite className="fn">{_item.name}</cite>
                <div className="reply">
                    <a href="javscript:;" className="comment-reply-link">Reply</a>
                </div>
                <p>{_item.comment}</p>
            </div>
        </div>
    )
}

/**
 * 
 * @returns Markup for making a new comment
 * @notExported
 */
const SectionBlogLeaveAReply = () => {
    return (
        <div className="comment-respond" id="respond">
            <h3 className="comment-reply-title section-head-small mb-4" id="reply-title">Leave a Comment
                <small>
                    <a style={{ display: 'none' }} href="!#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a>
                </small>
            </h3>
            <form className="comment-form" id="commentform" method="post">
                <div className="row">
                    <div className="comment-form-author col-md-6 mb-3">
                        <label><span>Your Name</span></label>
                        <input className="form-control" type="text" name="user-comment" placeholder="Your Name*" id="author" />
                    </div>
                    <div className="comment-form-email col-md-6 mb-3">
                        <label><span>Your Email</span></label>
                        <input className="form-control" type="text" name="email" placeholder="Your Email*" />
                    </div>
                    <div className="comment-form-comment col-md-12 mb-4">
                        <label><span>Message</span></label>
                        <textarea className="form-control" rows={8} name="comment" placeholder="Message*" id="comment" defaultValue={""} />
                    </div>
                    <div className="comment-form-cookies-consent mb-4">
                        <p>
                            <span>*</span> Call us 24/7  or fill out the form below to receive a free.
                        </p>
                    </div>
                    <div className="form-submit">
                        <button type="submit" className="site-button">Post Comment <i className="fa fa-plus" /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SectionBlogComments;