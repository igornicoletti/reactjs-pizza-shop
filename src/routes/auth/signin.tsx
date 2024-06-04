import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Form, Link, useSearchParams } from 'react-router-dom'

import { SignInApi } from '../../api'
import { SignInProps } from '../../types'
import { UseToast } from '../../hooks/toast'
import { AuthVariants, FormVariants } from '../../styles'

const { authcontent, authwrapper, authtitle, authdescript, authlink } = AuthVariants()
const { formcontent, formgroup, forminput, formlabel, formerror, formaction } = FormVariants()

export const SignInPage = () => {
  const toast = UseToast()

  const [searchParams] = useSearchParams()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: SignInApi
  })

  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignInProps>({
    defaultValues: { email: searchParams.get('email') ?? '' }
  })

  const handleSubmitForm = async ({ email }: SignInProps) => {
    try {
      await authenticate({ email })
      toast.success({
        title: 'Verifique seu e-mail!',
        description: `Um link de autenticação foi enviado para o e-mail ${email}.`
      })
    } catch {
      toast.danger({
        title: 'Credenciais inválidas!',
        description: `${email} não existe em nossos registros. Cadastre-se.`
      })
    }
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
          <button className={formaction({ color: 'primary' })} disabled={!watch('email')} type='submit'>Acessar</button>
        </Form>
        <p className={authdescript()}>Não tem uma conta?{' '}<Link to={'/signup'} className={authlink()}>Cadastre-se.</Link></p>
      </div>
    </div>
  )
}