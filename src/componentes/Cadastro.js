import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "./Cadastro"

function Cadastro() {
    const handleClickRegistro = (values) => console.log(values);

    const validationRegister = yup.object().shape({
        email: yup
            .string()
            .email("Náo é um email")
            .required("Este campo é obrigatorio"),

        password: yup
            .string()
            .min(8, "No minimo 8 caracteres")
            .required("Este campo é obrigatorio"),

        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais")
    })
    return (
        <div>
            <h1>Cadastro</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleClickRegistro}
                validationSchema={validationRegister}>

                <Form className={styles.login_form}>
                    <div className={styles.login_form_group}>
                        <Field
                            name="email"
                            className="form-field"
                            placeholder="Email" />

                        <ErrorMessage
                            component="Span"
                            name="email"
                            className="form-error" />
                    </div>

                    <div className={styles.login_form_group}>
                        <Field
                            name="password"
                            className="form-field"
                            placeholder="Senha" />

                        <ErrorMessage
                            component="Span"
                            name="password"
                            className="form-error" />

                    </div>
                    <div className={styles.login_form_group}>
                        <Field
                            name="confirmPassword"
                            className="form-field"
                            placeholder="Confirme sua Senha" />

                        <ErrorMessage
                            component="Span"
                            name="confirmPassword"
                            className="form-error" />

                    </div>
                    <button className={styles.button} type="submit">Login</button>
                </Form>

            </Formik>
        </div>
    )
}
export default Cadastro;