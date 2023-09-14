import { AuthButtonServer } from "@/app/components/auth-button-server"

const Login = () => {
  return (
    <section className="grid place-content-center min-h-screen">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <AuthButtonServer />
    </section>
  )
}

export default Login