import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Form, Link, useSearchParams } from 'react-router-dom'

import { SignInApi } from '../../api/signin'
import { UseToast } from '../../hooks/toast'
import { AuthVariants, BtnVariants, FormVariants } from '../../styles/variants'

const { btnaction } = BtnVariants()
const { formcontent, formgroup, forminput, formlabel, formerror } = FormVariants()
const { authcontent, authwrapper, authtitle, authdescript, authlink } = AuthVariants()

type FormProps = {
  email: string
}

export const SignInPage = () => {
  const toast = UseToast()

  const [searchParams] = useSearchParams()

  const { mutateAsync: authenticate } = useMutation({ mutationFn: SignInApi })

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormProps>({
    defaultValues: { email: searchParams.get('email') ?? '' }
  })

  const handleSubmitForm = async (data: FormProps) => {
    try {
      await authenticate({ email: data.email })
      toast.success({
        title: 'Verifique seu e-mail!',
        description: `Um link de autenticação foi enviado para o e-mail ${data.email}.`
      })
      reset()
    } catch {
      toast.error({
        title: 'Credenciais inválidas!',
        description: `${data.email} não correspondem aos nossos registros. Cadastre-se.`
      })
      reset()
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
          <button className={btnaction({ color: 'cyan' })} disabled={!watch('email')} type="submit">Acessar</button>
        </Form>
        <p className={authdescript()}>Não tem uma conta?{' '}<Link to={'/signup'} className={authlink()}>Cadastre-se.</Link></p>
      </div>
    </div>
  )
}