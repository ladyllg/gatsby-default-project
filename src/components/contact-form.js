import { useForm, ValidationError } from "@formspree/react";
import React from 'react';
import * as styles from '../styles/contact-form.module.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjvzjlna");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.wrap}>
            <input id="email" type="email" name="email" placeholder="Your email"/>
            <ValidationError
                className={styles.fieldErrors}
                prefix="Email"
                field="email"
                errors={state.errors}
            />
          </div>
          
          <div className={styles.wrap}>
            <textarea id="message" name="message" placeholder="Your message"/>
            <ValidationError
                className={styles.fieldErrors}
                prefix="Message"
                field="message"
                errors={state.errors}
            />
          </div>
          
          <div className={styles.wrap}>
            <button type="submit" className={styles.bn13} disabled={state.submitting}>
                Submit
            </button>
          </div>
          <ValidationError className={styles.formErrors} errors={state.errors} />
      </form>    
  );
}
