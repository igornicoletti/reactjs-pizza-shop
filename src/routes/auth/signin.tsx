import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Form, Link, redirect } from 'react-router-dom'

import { SignInApi } from '../../api/signin'
import { AuthVariants, FormVariants } from '../../styles/variants'

const { authcontent, authwrapper, authtitle, authdescript, authlink } = AuthVariants()
const { formcontent, formgroup, forminput, formlabel, formerror, formaction } = FormVariants()

type FormProps = {
  email: string
}

export const SignInPage = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormProps>()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: SignInApi
  })

  const handleSubmitForm = async (data: FormProps) => {
    await authenticate({ email: data.email })
    redirect('/app/dashboard')
    reset()
  }

  return (
    <div className={authcontent()}>
      <div className={authwrapper()}>
        <h1 className={authtitle()}>Entrar</h1>
        <Form className={formcontent()} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={formgroup()}>
            <input className={forminput()} type='email' id='email' placeholder=' '
              {...register('email', { required: { value: true, message: 'Por favor, informe um e-mail' } })} />
            <label className={formlabel()} htmlFor='email'>E-mail</label>
            {errors.email && <span className={formerror()}>{errors.email.message}</span>}
          </div>
          <button className={formaction()} disabled={!watch('email')} type="submit">Acessar</button>
        </Form>
        <p className={authdescript()}>Não tem uma conta?{' '}<Link to={'/signup'} className={authlink()}>Cadastre-se.</Link></p>
      </div>
    </div>
  )
}