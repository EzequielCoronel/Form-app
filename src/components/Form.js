import React from 'react';
import { useForm } from '../hooks/useForm';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
};

const validationsForm = (form) => {
    let errors = {};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es obligatorio";
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es obligatorio";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
    }

    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto' es obligatorio";
    }

    if (!form.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es obligatorio";
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }

    return errors;
}

export default function Form () {

    const { form,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
        } = useForm (initialForm, validationsForm);
    
    return (
        <div className="form-register">
            <h2 className="form-name">Formulario de prueba</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="controls" 
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                />
                {errors.name && <p className="errors">{errors.name}</p>}
                <input 
                    className="controls"
                    type="email" 
                    name="email" 
                    placeholder="Escribe tu email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                />
                {errors.email && <p className="errors">{errors.email}</p>}
                <input 
                    className="controls"
                    type="text" 
                    name="subject" 
                    placeholder="Asunto"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.subject}
                    required
                />
                {errors.subject && <p className="errors">{errors.subject}</p>}
                <textarea 
                    className="controls"
                    name="comments"
                    cols="50"
                    rows="5"
                    placeholder="Escribe tus comentarios"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                >
                </textarea>
                {errors.comments && <p className="errors">{errors.comments}</p>}
                <input 
                    onClick={handleSubmit}
                    className="bottoms"
                    type="submit"
                    value="Enviar"
                />
            </form>
        </div>
    )
}