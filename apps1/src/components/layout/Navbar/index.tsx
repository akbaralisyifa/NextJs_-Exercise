import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} text-white flex justify-around`}>
      <h1>Navbar</h1>
      <ul className="flex">
        <li className="mr-10">
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/product`}>Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
