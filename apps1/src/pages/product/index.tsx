import ProductView from '@/components/Product/Main';
import { fetcher } from '@/lib/swr/fetcher';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function index() {
  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);

  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push('/auth/login');
    }
  }, []);

  const { data, error, isLoading } = useSWR('api/product', fetcher);

  console.log(data);
  console.log(error);
  console.log(isLoading);

  // useEffect(() => {
  //   fetch('/api/product')
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       setProducts(resJson.data);
  //     });
  // }, []);

  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  );
}
