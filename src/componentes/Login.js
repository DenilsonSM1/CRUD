import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

import styles from "./Login.css"
function Login() {
    const handleClickLogin = (values) => console.log(values);
    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Náo é um email")
            .required("Este campo é obrigatorio"),

        password: yup
            .string()
            .min(8, "No minimo 8 caracteres")
            .required("Este campo é obrigatorio"),
    })

    return (
        <main className={styles.container}>
            <h1>Login</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleClickLogin}
                validationSchema={validationLogin}>

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
                    <button className={styles.button} type="submit">Login</button>
                </Form>
            </Formik>
            <Link to="/cadastrar">Cadastrar</Link>
          
        </main>
    )
}
export default Login;