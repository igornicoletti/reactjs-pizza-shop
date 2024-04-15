import { useForm } from 'react-hook-form'
import { Form, Link, useNavigate } from 'react-router-dom'

import { AuthVariants, FormVariants } from '../../styles/variants'

const { formcontent, formgroup, forminput, formlabel, formerror, formaction } = FormVariants()
const { authcontent, authwrapper, authhead, authtitle, authdescript, authlink } = AuthVariants()

type FormProps = {
  email: string
}

export const SignInPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormProps>()

  const handleSubmitForm = async (data: FormProps) => {
    console.log(data)
    navigate('/dashboard')
    reset()
  }

  return (
    <div className={authcontent()}>
      <div className={authwrapper()}>
        <div className={authhead()}>
          <h1 className={authtitle()}>Entrar</h1>
          <p className={authdescript()}>Não tem uma conta?
            {' '}<Link to={'signup'} className={authlink()}>Cadastre-se.</Link>
          </p>
        </div>
        <Form className={formcontent()} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={formgroup()}>
            <input className={forminput()} type='email' id='email' placeholder=' '
              {...register('email', { required: { value: false, message: 'Por favor, informe um e-mail' } })} />
            <label className={formlabel()} htmlFor='email'>E-mail</label>
            {errors.email && <span className={formerror()}>{errors.email.message}</span>}
          </div>
          <button className={formaction()} disabled={isSubmitting} type="submit">Acessar</button>
        </Form>
      </div>
    </div>
  )
}