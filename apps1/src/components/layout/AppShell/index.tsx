import { useRouter } from 'next/router';
import Navbar from '../Navbar';

type AppshellProps = {
  children: React.ReactNode;
};

const disabledNavbar = ['/auth/login', '/auth/register', '/404'];

const AppShell = (props: AppshellProps) => {
  const { children } = props;

  const { pathname } = useRouter();

  return (
    <div>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
    </div>
  );
};

export default AppShell;
