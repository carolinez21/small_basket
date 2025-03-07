import React from "react";
import "../../style/grocer_side/Body.css";
import number1 from "../../images/number_1.svg";
import number2 from "../../images/number_2.svg";
import number3 from "../../images/number_3.svg";
import { ImQuotesLeft } from "react-icons/im";

export default function Body(props) {
  return (
    <section className="grocer_side-body-div_1">
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-process_text">
          <h2>Who we are</h2>
          <p className="grocer_side-body-process_text_light">
            We're a small company with a big goal. COVID-19 has hit the small
            guys the hardest and made keeping a business afloat in this time
            hard. Larger businesses can move to an online platform to reach
            their customers even at home, but what about the small guys? We want
            to provide you with a simple and affordable solution that will
            increase revenue by reaching your loyal customers anywhere at any
            time with our solution.
          </p>
        </div>
      </div>
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-process_text">
          <h2>Our solution</h2>
          <div>
            <p>
              <b>Anyone can use our simple and easy to use app.</b>
            </p>
            <div className="grocer_side-body-process_steps">
              <img src={number1} alt="number 1 in a circle" />
              <p>Add items to your inventory and adjust quantity.</p>
            </div>
            <div className="grocer_side-body-process_steps">
              <img src={number2} alt="number 2 in a circle" />
              <p>Prepare orders for pick-up.</p>
            </div>
            <div className="grocer_side-body-process_steps">
              <img src={number3} alt="number 3 in a circle" />
              <p>Hand order over to customer/delivery courier.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-partner_text">
          <h2>Become a partner</h2>
          <p className="grocer_side-body-process_text_light">
            We have a simple, quick and easy application process.
          </p>
          <button className="grocer_side-partner-button">Apply Now</button>
        </div>
      </div>
      <div className="grocer_side-body-testimonial">
        <div className="grocer_side-body-testimonial_div">
          <ImQuotesLeft className="grocer_side-body-testimonial_quote_icon" />
          <div className="grocer_side-body-testimonial_text">
            The pandemic has been really difficult. Everyone was moving online,
            that was the obvious solution. But I am so lost when it comes to
            technology. and all of the options were just so complicated. Small
            basket was our saving grace, it’s so easy.
          </div>
          <h2>Al - Ikhwan Halal Meat & Grocery Inc</h2>
        </div>
        <div className="grocer_side-body-testimonial_div">
          <ImQuotesLeft className="grocer_side-body-testimonial_quote_icon" />
          <div className="grocer_side-body-testimonial_text">
            Thank goodness for small basket. I honestly don’t know if my
            business would still be running without it! It is SO easy for me to
            advertise my goodies there. And a lot of people have come and told
            me they discovered us on small basket!
          </div>
          <h2>Nirmalas Gourmet Goodies</h2>
        </div>
      </div>
    </section>
  );
}
