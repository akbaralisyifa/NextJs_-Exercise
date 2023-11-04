import { useRouter } from 'next/router';

const ShopSlug = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h1>Shop Pages</h1>
      <p>
        Shop Slug : {query.slug ? query.slug[0] : ''} - {query.slug ? query.slug[1] : ''}
      </p>
    </div>
  );
};

export default ShopSlug;
