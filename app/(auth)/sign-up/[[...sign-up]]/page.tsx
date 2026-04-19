import { SignUp } from '@clerk/nextjs'
import { ThemeToggle } from '@/components/ThemeToggle'

const SignUpPage = () => {
  return (
    <main className='auth-page flex flex-col items-center justify-center min-h-screen'>
      <div className='absolute top-6 right-6'>
        <ThemeToggle />
      </div>
      <SignUp />
    </main>
  )
}

export default SignUpPage

