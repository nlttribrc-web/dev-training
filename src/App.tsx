import './App.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, type LoginForm } from './schemas/loginFormSchema';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = (data: LoginForm) => alert(`Welcome, ${data.mail}!`);

  return (
    <div className='flex justify-center h-screen w-screen'>
      <div className='border border-slate-300 pt-12 pb-9 px-8 rounded'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Sign In</h1>
          <p className='text-slate-500 mt-5 mb-9'>Enter your credencials to continue</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register('mail')} type="text" className='w-full border-slate-300 rounded' placeholder='Email' />
            {errors.mail && <p className='text-red-500 mt-1 animate-fade-down animate-duration-200'>{errors.mail.message}</p>}
          </div>
          <div className='mt-10'>
            <input {...register('password')} type="password" className='w-full border-slate-300 rounded' placeholder='Password' />
            {errors.password && <p className='text-red-500 mt-1 animate-fade-down animate-duration-200'>{errors.password.message}</p>}
          </div>
          <div className='flex justify-between mt-8 mb-7'>
            <div className='flex items-center mr-20'>
              <input type="checkbox" className='mr-2 border-slate-300 rounded' />
              <label className='text-slate-600 font-medium'>Remember me</label>
            </div>
            <a href="" className='text-blue-500 font-medium'>Forgot password?</a>
          </div>
          <button type='submit' className='w-full h-10 mb-7 text-white bg-blue-500 rounded'>
            Sign in
          </button>
        </form>
        <p className='text-center text-slate-500'>Don't have an account? <a href='' className='text-blue-500 font-medium cursor-pointer'>Create one</a></p>
      </div>
    </div>
  )
}

export default App
