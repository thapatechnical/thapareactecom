/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { AnalyticsBrowser } from "@segment/analytics-next";
const writeKey = process.env.write_key;
const analytics = AnalyticsBrowser.load({ writeKey: "trt2mhv6rjiqM8rpsRExWM1pBiguWqUm" });

analytics.debug(true);

const handleSubmit = async (e) => {
  e.preventDefault();

  // Access form field values
  const username = e.target.username.value;
  const email = e.target.Email.value;
  const message = e.target.Message.value;


  // Track analytics event
  analytics.track('Non-Hubspot Form Submitted', {
    attributes: {
      type: 'Contacts',
      userName: username,
      email: email,
      message: message,
    },
  });

  window.alert('Form Submitted Successfully');
};



const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  useEffect(() => {
    analytics.page("Page Viewed Contacts");
    console.log("In here");
    let properties = {
      attributes: {
        type: "Contacts",
      },
    };
    if (isAuthenticated) {
      properties.attributes.email = user.email;
    }
    analytics.track("Element Clicked", properties);
  }, [isAuthenticated, user]);
  // analytics.page("Page Viewed Contacts");
  // let properties = {
  //   attributes: {
  //     type: "Contacts"
  //   }
  // };
  // if(isAuthenticated)
  // {
  //   properties.attributes.email = user.email;
  // }
  // analytics.track("Element Clicked", properties);
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6742646941825!2d77.59173997518089!3d13.056393987266778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e0a2ceb611%3A0x6b202b434be4083c!2sCimpress%20Bangalore!5e0!3m2!1sen!2sin!4v1695814999238!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      

      <div className="container">
        <div className="contact-form">
          <form 
            // action="https://formspree.io/f/xrgwozqz"
            // method="POST"
            onSubmit={handleSubmit}
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              // value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              // value={isAuthenticated ? user.email : ""}
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
      
      {/* Embed HubSpot Form
      <div className="container">
        <div className="contact-form">
        </div>
      </div> */}
    </Wrapper>
  );
};

export default Contact;
