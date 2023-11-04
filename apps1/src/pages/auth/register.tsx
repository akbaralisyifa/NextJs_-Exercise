import Link from 'next/link';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push('/product');
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        sudah punya akun ? login <Link href={'/auth/login'}>disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
