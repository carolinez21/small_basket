import React from "react";
import "../../style/user_side/Body.css";
import emoji from "../../images/how_we_roll_emoji.png";
import browseItems from "../../images/browse_items.png";
import checkout from "../../images/checkout.png";
import pickUpOrder from "../../images/pick-up_order.png";
import browseImage from "../../images/Browse_mockup.png";
import checkoutImage from "../../images/checkout_mockup.png";
import pickupImage from "../../images/pickup-delivery-mockup.png";
import icQuick from "../../images/ic_quick.png";
import icMask from "../../images/ic_mask.png";
import icHelp from "../../images/ic_help.png";
import { ImQuotesLeft } from "react-icons/im";
import { IoStarSharp } from "react-icons/io5";

export default function Body(props) {
  return (
    <section className="user_side-body-div_1">
      <div className="user_side-body-div_3" />
      <div className="user_side-body-div_2">
        <div className="user_side-body-div_2_text">How we roll</div>
        <img className="user_side-body-emoji" src={emoji} alt="" />
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={browseItems} alt="" />
          <p className="user_side-body-process_text">
            Browse through items at a small grocer near you using our app.
          </p>
        </div>
        <div className="user_side-body-process_image">
          <img
            src={browseImage}
            className="user_side-main-image"
            alt="Small Poccket Browse Example"
          />
        </div>
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={checkout} alt="" />
          <div className="user_side-body-process_image_left">
            <img
              src={checkoutImage}
              className="user_side-main-image-left"
              alt="Small Poccket Browse Example"
            />
          </div>
        </div>
        <p className="user_side-body-process_text_right">
          When you have made your selection of goods, pay conveniently right
          through our app. <br /> <br /> See a live update of your order as the
          grocery store puts the items together.
        </p>
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={pickUpOrder} alt="" />
          <p className="user_side-body-process_text">
            When your order is ready, head over to the store for pick-up or wait
            for your delivery to arrive.
          </p>
        </div>
        <div className="user_side-body-process_image">
          <img
            src={pickupImage}
            className="user_side-main-image"
            alt="Small Poccket pickup Example"
            style={{ "width": "420px", "height": "400px", "margin": "5px -20px 0px 0px"}}
          />
        </div>
      </div>
      <div className="user_side-body-stats">
        <div className="user_side-body-stats_item">
          <img src={icQuick} alt="" />
          <h2>
            Quick and
            <br />
            convenient
          </h2>
        </div>
        <div className="user_side-body-stats_item">
          <img src={icMask} alt="" />
          <h2>
            Distanced
            <br />
            Shopping
          </h2>
        </div>
        <div className="user_side-body-stats_item">
          <img src={icHelp} alt="" />
          <h2>
            Help small
            <br />
            businesses in their
            <br />
            time of need
          </h2>
        </div>
      </div>
      <div className="user_side-body-subscription">
        <div className="user_side-body-subscription_text_1">
          Don’t pay delivery fees with BasketPass!
        </div>
        <div className="user_side-body-subscription_text_2">
          Starting at $9.99/mo.
        </div>
      </div>
      <div className="user_side-body-testimonial">
        <div className="user_side-body-testimonial_div">
          <ImQuotesLeft className="user_side-body-testimonial_quote_icon" />
          <div className="user_side-body-testimonial_stars">
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
          </div>
          <div className="user_side-body-testimonial_text">
            Amazing! There’s a korean grocery store that’s my absolute FAVE, but
            it’s so far away that I usually don’t have time to go shop there.
            Small basket makes it so easy and convenient and it saves me the
            trip!
          </div>
          <h2>Cassidy</h2>
        </div>
        <div className="user_side-body-testimonial_div">
          <ImQuotesLeft className="user_side-body-testimonial_quote_icon" />
          <div className="user_side-body-testimonial_stars">
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
          </div>
          <div className="user_side-body-testimonial_text">
            Just got another delivery from my favorite local organic foods shop
            - I couldn’t be happier! I’m so excited to use this app to support
            them and I’ve been telling all my friends about it too. 😀
          </div>
          <h2>Brian</h2>
        </div>
        <div className="user_side-body-testimonial_div">
          <ImQuotesLeft className="user_side-body-testimonial_quote_icon" />
          <div className="user_side-body-testimonial_stars">
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
            <IoStarSharp className="user_side-body-testimonial_stars_stars" />
          </div>
          <div className="user_side-body-testimonial_text">
            My mom’s always making us food that reminds me of home. But to get
            the right ingredients she has to go so far for the closest Indian
            grocery store. I’m so glad I can use small basket.
          </div>
          <h2>Kavya</h2>
        </div>
      </div>
      <div className="user_side-body-downlaod">
        <div className="user_side-body-downlaod_discount_text">
          Get $10 off your first order
        </div>
        <button className="user_side-body-downlaod_button">Download</button>
      </div>
        
        <script>const c="[COLOUR]"; const u="https://mat.massively.ai/chat?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJrTFVJdGtKZUdKZ1B4T3JFejlJSzE2MTBybzQyIiwic3RvcnlJZCI6ImNlZDIwYTc3LTUxNTctNDg2Yy1iYjc1LWQzZDIzYThlODc4ZiIsImJvdElkIjoiMmFhZTk2M2QtZWI5MC00NTYyLTk1OGItNGZiNmUwYWJiNzFkIiwiaWF0IjoxNjUxMDg4MzM1fQ.13O67WG6wbHnZOwPuI_vi6mjI4XJ-h8Cnbnb6SlRY38";</script>
        <script type="text/javascript" src="https://s3.amazonaws.com/uploads.massively.ai/widget.min.js" async defer></script>
        
    </section>
  );
}
