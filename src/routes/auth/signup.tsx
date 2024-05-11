import { useForm } from 'react-hook-form'
import { Form, Link, redirect } from 'react-router-dom'

import { AuthVariants, FormVariants } from '../../styles/variants'

const { authcontent, authwrapper, authtitle, authdescript, authlink } = AuthVariants()
const { formcontent, formgroup, forminput, formlabel, formerror, formaction } = FormVariants()

type FormProps = {
  name: string
  email: string
}

export const SignUpPage = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormProps>()

  const handleSubmitForm = async (data: FormProps) => {
    console.log(data)
    redirect('/signin')
    reset()
  }

  return (
    <div className={authcontent()}>
      <div className={authwrapper()}>
        <h1 className={authtitle()}>Cadastre-se</h1>
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
          <button className={formaction()} disabled={!watch('name') || !watch('email')} type="submit">Cadastrar</button>
        </Form>
        <p className={authdescript()}>Já tem uma conta?{' '}<Link to={'/signin'} className={authlink()}>Entrar.</Link></p>
      </div>
    </div>
  )
}