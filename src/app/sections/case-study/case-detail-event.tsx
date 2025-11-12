/**
 * @module Section-Case-Event
 */

import { TypeSectionCaseEvent } from "../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied to display case event detail
 * @returns Markup for sample case event
 */
const SectionCaseDetailEvent = (props: {
    _event: TypeSectionCaseEvent
}) => {
    const { _event } = props;
    return (
        <div className="av-event-detail">
            <h3 className="av-title">Event Detail</h3>
            <ul className="av-event-info">
                <li><span>Start Time:</span>{_event.time}</li>
                <li><span>Date:</span>{_event.date}</li>
                <li><span>Category:</span>{_event.categories}</li>
                <li><span>Phone:</span>{_event.phone}</li>
                <li><span>Website:</span>{_event.website}</li>
                <li><span>Location:</span>{_event.location}</li>
            </ul>
            <ul className="social-icons-st1">
                <li><a href="https://www.facebook.com" className="fa-brands fa-facebook"> </a></li>
                <li><a href="https://www.x.com" className="fa-brands fa-square-x-twitter"> </a></li>
                <li><a href="https://www.instagram.com" className="fa-brands fa-square-instagram"> </a></li>
                <li><a href="https://in.linkedin.com" className="fa-brands fa-linkedin"> </a></li>
            </ul>
        </div>
    )
}

export default SectionCaseDetailEvent;