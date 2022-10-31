import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
    
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0) {
            alert("Enviando formulario");
            setLoading(true);
        } else {
            return;
        }
    }

    return {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    }

}