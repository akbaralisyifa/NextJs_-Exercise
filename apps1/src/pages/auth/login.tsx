import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <h1>Login page</h1>
      <p>
        Belum punya akun ? registrasi <Link href={'/auth/register'}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
