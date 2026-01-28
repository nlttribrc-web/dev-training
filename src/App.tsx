import './App.css'

function App() {

  return (
    <div className='flex justify-center mt-36'>
      <div className='w-1/5 border border-slate-300 pt-12 pb-9 px-8 rounded'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Sign In</h1>
          <p className='text-slate-500 mt-5 mb-9'>Enter your credencials to continue</p>
        </div>
        <form action="">
          <input type="email" className='w-full mb-10 border-slate-300 rounded' placeholder='Email' />
          <input type="password" className='w-full border-slate-300 rounded' placeholder='Password' />
          <div className='flex justify-between mt-8 mb-7'>
            <div className='flex items-center'>
              <input type="checkbox" className='mr-2 border-slate-300 rounded' />
              <label className='text-slate-600 font-medium'>Remember me</label>
            </div>
            <a href="" className='text-blue-500 font-medium'>Forgot password?</a>
          </div>
          <button className='w-full h-10 mb-7 text-white bg-blue-500 rounded'>
            Sign in
          </button>
        </form>
        <p className='text-center text-slate-500'>Don't have an account? <a href='' className='text-blue-500 font-medium cursor-pointer'>Create one</a></p>
      </div>
    </div>
  )
}

export default App
