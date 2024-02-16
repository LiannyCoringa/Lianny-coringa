import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mnqeprkk');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={ handleSubmit } className="form-contact" id="contact">
      <h1>
        Entre em contato
        <span className="span-contact"> comigo</span>
      </h1>
      <label htmlFor="email" className="label">
        Seu Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="input-contact"
        placeholder="Digite seu email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={ state.errors }
      />
      <label htmlFor="message" className="label">
        Sua Mensagem
      </label>
      <textarea
        id="message"
        name="message"
        className="input-textarea-contact"
        placeholder="Digite sua mensagem"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={ state.errors }
      />
      <button type="submit" disabled={ state.submitting } className="button-contact">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
