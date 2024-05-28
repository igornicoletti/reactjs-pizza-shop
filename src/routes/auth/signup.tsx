import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Form, Link, useNavigate } from 'react-router-dom'

import { UseToast } from '../../hooks/toast'
import { SignUpApi } from '../../api/signup'
import { AuthVariants, BtnVariants, FormVariants } from '../../styles/variants'

const { btnaction } = BtnVariants()
const { formcontent, formgroup, forminput, formlabel, formerror } = FormVariants()
const { authcontent, authwrapper, authtitle, authdescript, authlink } = AuthVariants()

type FormProps = {
  restaurantName: string
  managerName: string
  email: string
}

export const SignUpPage = () => {
  const toast = UseToast()

  const navigate = useNavigate()

  const { mutateAsync: subscribe } = useMutation({ mutationFn: SignUpApi })

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormProps>()

  const handleSubmitForm = async (data: FormProps) => {
    try {
      await subscribe({ restaurantName: data.restaurantName, managerName: data.managerName, email: data.email })
      toast.success({
        title: `Cadastro realizado!`,
        description: `Acesse com o e-mail ${data.email} para receber um link de autenticação.`
      })
      navigate(`/signin?email=${data.email}`)
      reset()
    } catch {
      toast.warning({
        title: `Credenciais existentes!`,
        description: `${data.email} já existe em nossos registros. Cadastre um novo e-mail.`
      })
      reset()
    }
  }

  return (
    <div className={authcontent()}>
      <div className={authwrapper()}>
        <h1 className={authtitle()}>Cadastre-se</h1>
        <Form className={formcontent()} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={formgroup()}>
            <input className={forminput()} type='text' id='restaurantName' placeholder=' '
              {...register('restaurantName', { required: { value: true, message: 'Por favor, informe um nome' } })} />
            <label className={formlabel()} htmlFor='restaurant'>Restaurante</label>
            {errors.restaurantName && <span className={formerror()}>{errors.restaurantName.message}</span>}
          </div>
          <div className={formgroup()}>
            <input className={forminput()} type='text' id='managerName' placeholder=' '
              {...register('managerName', { required: { value: true, message: 'Por favor, informe um nome' } })} />
            <label className={formlabel()} htmlFor='managerName'>Nome</label>
            {errors.managerName && <span className={formerror()}>{errors.managerName.message}</span>}
          </div>
          <div className={formgroup()}>
            <input className={forminput()} type='email' id='email' placeholder=' '
              {...register('email', { required: { value: true, message: 'Por favor, informe um e-mail' } })} />
            <label className={formlabel()} htmlFor='email'>E-mail</label>
            {errors.email && <span className={formerror()}>{errors.email.message}</span>}
          </div>
          <button className={btnaction({ color: 'cyan' })} disabled={!watch('restaurantName') || !watch('managerName') || !watch('email')} type="submit">Cadastrar</button>
        </Form>
        <p className={authdescript()}>Já tem uma conta?{' '}<Link to={'/signin'} className={authlink()}>Entrar.</Link></p>
      </div>
    </div>
  )
}