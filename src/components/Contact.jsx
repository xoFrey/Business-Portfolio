import ContactInfo from "./ContactInfo";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <section className='contact'>
      <p className='paragraph'>Contact</p>
      <div className='contact-container'>
        <h2>
          Let's make something <span>together.</span>
        </h2>
        <div className='contact-info-container'>
          <ContactInfo
            name={"GitHub"}
            link={"github.com/xofrey"}
          />
          <ContactInfo
            name={"LinkedIn"}
            link={"linkedin.com/izelacar"}
          />{" "}
          <ContactInfo
            name={"E-Mail"}
            link={"info@izel-acar.de"}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
