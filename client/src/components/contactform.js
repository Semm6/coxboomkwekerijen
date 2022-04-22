import React from "react";
import "../style/contactform.css";

function ContactForm() {
  return (
    <div>
      <form action="https://formsubmit.co/devsemdw@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />

        <div className="textboxes">
          <label for="Naam">
            <b>Naam</b>
          </label>
          <input type="text" name="naam" required />
          <label for="Email">
            <b>Email</b>
          </label>
          <input type="email" name="email" required />
          <label for="Bedrijf">
            <b>Bedrijf</b>
          </label>
          <input type="text" name="bedrijf" required />
          <label for="Telefoon">
            <b>Telefoon</b>
          </label>
          <input type="text" name="telefoon" />
          <label for="Opmerking">
            <b>Opmerking</b>
          </label>
          <textarea type="text" name="opmerking" rows="1" cols="20"></textarea>
          <button type="submit">Verzenden</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
