import { useForm } from 'react-hook-form'
import { Form, Link, useNavigate } from 'react-router-dom'

import { AuthVariants, FormVariants } from '../../styles/variants'

const { formcontent, formgroup, forminput, formlabel, formerror, formaction } = FormVariants()
const { authcontent, authwrapper, authhead, authtitle, authdescript, authlink } = AuthVariants()

type FormProps = {
  name: string
  email: string
}

export const SignUpPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormProps>()

  const handleSubmitForm = async (data: FormProps) => {
    console.log(data)
    navigate('/')
    reset()
  }

  return (
    <div className={authcontent()}>
      <div className={authwrapper()}>
        <div className={authhead()}>
          <h1 className={authtitle()}>Cadastre-se</h1>
          <p className={authdescript()}>Já tem uma conta?
            {' '}<Link to={'/'} className={authlink()}>Entrar.</Link>
          </p>
        </div>
        <Form className={formcontent()} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={formgroup()}>
            <input className={forminput()} type='text' id='name' placeholder=' '
              {...register('name', { required: { value: true, message: 'Por favor, informe um nome' } })} />
            <label className={formlabel()} htmlFor='name'>Nome</label>
            {errors.name && <span className={formerror()}>{errors.name.message}</span>}
          </div>
          <div className={formgroup()}>
            <input className={forminput()} type='email' id='email' placeholder=' '
              {...register('email', { required: { value: true, message: 'Por favor, informe um e-mail' } })} />
            <label className={formlabel()} htmlFor='email'>E-mail</label>
            {errors.email && <span className={formerror()}>{errors.email.message}</span>}
          </div>
          <button className={formaction()} disabled={isSubmitting} type="submit">Cadastrar</button>
        </Form>
      </div>
    </div>
  )
}