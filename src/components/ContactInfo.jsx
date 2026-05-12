import "./CSS/Contact.css";

const ContactInfo = ({ name, link }) => {
  return (
    <div className='contact-info'>
      <p>{name}</p>
      <p>{link}</p>
    </div>
  );
};

export default ContactInfo;
