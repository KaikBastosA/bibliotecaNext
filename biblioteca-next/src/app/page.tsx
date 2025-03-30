'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import logo from '@/assets/Logo.svg';
import picture from '@/assets/Picture.png';
import Image from 'next/image';

const schema = z.object({
  email: z.string().nonempty('Por favor, insira um email válido!').email('Por favor, insira um email válido!'),
  password: z.string().nonempty('A senha deve ter no mínimo 6 caracteres!').min(6, 'A senha deve ter no mínimo 6 caracteres!'),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: FormData) => {
    console.log(data);

    router.push('/home');
  };

  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.imageContainer}>
        <Image src={picture} alt="login-illustration" />
      </div>
      <div className={styles.formContainer}>
        <Image src={logo} alt="site-logo" className={styles.logo} />
        <div className={styles.greetings}>
          <h2>Bem-vindo(a)!</h2>
          <h1>Entre na sua conta</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label htmlFor="email" className={styles.label}>E-mail</label>
          <input
            type="email"
            id="email"
            placeholder='Digite aqui seu e-mail'
            {...register('email')}
            className={styles.loginInput}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}

          <label htmlFor="password" className={styles.label}>Senha</label>
          <input
            type="password"
            id="password"
            placeholder='Digite aqui sua senha'
            {...register('password')}
            className={styles.loginInput}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}

          <div className={styles.btns}></div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
          <button type="button" className={styles.registerButton}>Cadastre-se</button>
        </form>
      </div>
    </div>
  );
}
