import "../style/contact.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Route } from "react-router-dom";
import ContactForm from "../components/contactform";

function Contact() {
  document.title = Route.title = "Cox Boomkwekerijen";
  return (
    <body>
      <div>
        <h1>Contact</h1>
        <p>Raaystraat 11</p>
        <p>6071NC Swalmen</p>
        <p>0475 504 261</p>
        <div className="info">
          <ContactForm />
        </div>
      </div>
    </body>
  );
}

export default Contact;
