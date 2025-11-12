/**
 * @module Page-Services-Detail
 */

import { BANNER_TYPE } from "../../../globals/constants";
import { useEffect } from "react";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import AvertImage from "../../../globals/elements/avertimg";
import SectionInnerPageBanner from "../../sections/common/banner";

/**
 * 
 * @returns Markup template for sample page Service Detail
 * (Example Page with Static Data)
 */
function ServicesDetailPage() {

    useEffect(()=>{
        loadScript("js/custom.js");
    })
    
    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.service_detail} _type={BANNER_TYPE.IMAGE} />
            {/* INNER PAGE BANNER END */}

            {/* Case Study SECTION START */}
            <div className="section-full p-t50 p-b90 site-bg-white av-sd-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
                <div className="container">
                    <div className="section-content">
                        <div className="av-content-title">
                            <h2 className="av-large-title">Advertising And Marketing</h2>
                            <p className="p-text">
                                Mauris ultricies orci in sodales molestie. Nullam et vehicula lacus, euismod gravida tortor. Morbi ipsum lectus, viverra id vulputate eget, molestie non nunc. Donec mollis accumsan risus, at vestibulum tortor commodo at. Cras vulputate nisi in consectetur sollicitudin. Vestibulum ut vestibulum justo. Fusce fringilla ullamcorper elit, a bibendum orci blandit non. Integer porta, nunc ut ornare auctor, mauris nulla blandit ipsum, a facilisis tortor nisi eget ex. Integer luctus sollicitudin justo et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla in ligula vitae turpis suscipit tristique id ut turpis. Aenean mollis purus in arcu tempor, nec suscipit nulla sodales.
                            </p>
                            <p className="p-text">
                                Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulum iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae arius pulvinar, molestie in massa. Quisque ut venenatis nunc, vitae rutrum libero. Duis eget consectetur urna. Ut ut aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eget nisl non elit tempor dignissim nec non sapien. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a not only five galley.
                            </p>
                        </div>
                        <div className="av-service-detail">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="av-service-detail-media m-b30">
                                        <AvertImage src="images/serv-detail.jpg" alt="#" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="av-service-detail-content">
                                        <div className="av-content-title">
                                            <h2 className="av-large-title">IT Consultancy And IT Services To Join Our Work Company?</h2>
                                            <p className="p-text">
                                                Nulla facilisi. Nullam congue, tortor id finibus posuere, risus magna convallis massa, sit amet gravida est tellus vitae dui. Proin hendrerit diam a commodo aliquam. In vitae interdum odio. Duis sit amet nisl eget odio facilisis lacinia.
                                            </p>
                                            <div className="wt-box m-b30 wow">
                                                <div className="our-skills-item">
                                                    <span className="progressText text-black">Content Strategy</span>
                                                    <div className="progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ '--progress-bar-count': '70%' } as React.CSSProperties}>
                                                                <span>70%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="our-skills-item">
                                                    <span className="progressText text-black">High Performance</span>
                                                    <div className="progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ '--progress-bar-count': '80%' } as React.CSSProperties}>
                                                                <span>80%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            {/* Case Study SECTION END */}
        </>
    )
}
export default ServicesDetailPage;