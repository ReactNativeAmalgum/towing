import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'
import './Gallery.css'
export default function GallerySection() {
    return (
        <section className="ls section_padding_top_100 section_padding_bottom_100">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 col-md-8 col-lg-8 col-sm-push-5 col-md-push-4 col-lg-push-4">
                        <article className="event-single vertical-item content-padding with_border">
                            <div className="item-media entry-thumbnail">
                                <img src="https://html.modernwebtemplates.com/towy/images/gallery/01.jpg" alt="" />
                            </div>
                            <div className="item-content top-zebra-border">
                                <header className="entry-header content-justify">
                                    <h3 className="entry-title">
                                        <a href="blog-single-left.html" rel="bookmark">
                                            Post With Large Image
                                        </a>
                                    </h3>
                                    <a href="#" className="entry-author">
                                        by Admin
                                    </a>
                                </header>
                                {/* .entry-header */}
                                <div className="entry-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut wisi
                                        enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate velit esse
                                        molestie consequat.
                                    </p>
                                    <p>
                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                                        esse molestie consequat, vel
                                        <a href="#">illum dolore eu feugiat</a> nulla facilisis at vero
                                        eros et accumsan et iusto odio dignissim qui blandit praesent
                                        luptatum zzril delenit augue duis dolore te feugait nulla
                                        facilisi. At vero eos et accusam et justo duo.
                                    </p>
                                </div>
                                {/* .entry-content */}
                            </div>
                            {/* .item-content */}
                        </article>
                        <div className="with_padding with_border comments-wrapper">
                            <div className="comment-respond" id="respond">
                                <form
                                    className="comment-form topmargin_20"
                                    id="commentform"
                                    method="post"
                                    action="./"
                                >
                                    <div className="row columns_margin_bottom_30">
                                        <div className="col-md-4">
                                            <p className="comment-form-author">
                                                <label htmlFor="author">
                                                    Name
                                                    <span className="required">*</span>
                                                </label>
                                                {/* <i class="rt-icon2-user-outline"></i> */}
                                                <input
                                                    type="text"
                                                    aria-required="true"
                                                    size={30}
                                                    defaultValue=""
                                                    name="author"
                                                    id="author"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                />
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="comment-form-email">
                                                <label htmlFor="comment_email">
                                                    Email
                                                    <span className="required">*</span>
                                                </label>
                                                {/* <i class="rt-icon2-mail2"></i> */}
                                                <input
                                                    type="email"
                                                    aria-required="true"
                                                    size={30}
                                                    defaultValue=""
                                                    name="comment_email"
                                                    id="comment_email"
                                                    className="form-control"
                                                    placeholder="Emain Address"
                                                />
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="comment-form-phone">
                                                <label htmlFor="comment_phone">
                                                    Phone Number
                                                    <span className="required">*</span>
                                                </label>
                                                {/* <i class="rt-icon2-mail2"></i> */}
                                                <input
                                                    type="email"
                                                    aria-required="true"
                                                    size={30}
                                                    defaultValue=""
                                                    name="comment_phone"
                                                    id="comment_phone"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                />
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="comment-form-chat">
                                                <label htmlFor="comment">Comment</label>
                                                {/* <i class="rt-icon2-pencil3"></i> */}
                                                <textarea
                                                    aria-required="true"
                                                    rows={8}
                                                    cols={45}
                                                    name="comment"
                                                    id="comment"
                                                    className="form-control"
                                                    placeholder="Message..."
                                                    defaultValue={""}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                    <p className="form-submit text-center">
                                        <button
                                            type="submit"
                                            id="submit"
                                            name="submit"
                                            className="theme_button"
                                        >
                                            Send Commnet
                                        </button>
                                        <button type="reset" id="reset" className="theme_button">
                                            Clear Form
                                        </button>
                                    </p>
                                </form>
                            </div>
                            {/* #respond */}

                            {/* #comments */}
                        </div>
                    </div>
                    {/*eof .col-sm-8 (main content)*/}
                    {/* sidebar */}
                    <aside className="col-sm-5 col-md-4 col-lg-4 col-sm-pull-7 col-md-pull-8 col-lg-pull-8">
                        <div className="widget widget_apsc_widget">
                            <h3 className="widget-title text-center">
                                Get
                                <strong>In Touch</strong>
                            </h3>
                            <hr className="divider_30_3 zebra_bg" />
                            <div className="apsc-icons-wrapper clearfix apsc-theme-4">
                                <div className="apsc-each-profile">
                                    <a className="apsc-facebook-icon clearfix" href="#">
                                        <div className="apsc-inner-block">
                                            <span className="social-icon">
                                                <FaFacebookF className='soical' style={{fontSize:24, marginBottom:5}} />
                                                <span className="apsc-count">24.7K</span>
                                                <span className="apsc-media-type">Friends</span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="apsc-each-profile">
                                    <a className="apsc-twitter-icon clearfix" href="#">
                                        <div className="apsc-inner-block">
                                            <span className="social-icon">
                                                <FaInstagram style={{fontSize:24, marginBottom:5}} className='social' />
                                                <span className="apsc-count">10.4K</span>
                                                <span className="apsc-media-type">Followers</span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="apsc-each-profile">
                                    <a className="apsc-google-plus-icon clearfix" href="#">
                                        <div className="apsc-inner-block">
                                            <span className="social-icon">
                                                <FaWhatsapp style={{fontSize:24, marginBottom:5}} className='social' />
                                                <span className="apsc-count">6.3K</span>
                                                <span className="apsc-media-type">Fans</span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>





                    </aside>
                    {/* eof aside sidebar */}
                </div>
            </div>
        </section>

    )
}
