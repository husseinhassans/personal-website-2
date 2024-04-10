import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Reach Out</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>Husseinhmhassan@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>3333 S La Cienega Blvd, Los Angeles, CA, 90016</span>
        </div>
        <div className="item">
          <h2>Mobile</h2>
          <span>+1 (424) 425-9229</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="text" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
