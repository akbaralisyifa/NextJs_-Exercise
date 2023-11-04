import Image from 'next/image';

const custom404 = () => {
  return (
    <div className="w-full h-screen  flex flex-col justify-center items-center text-4xl">
      <Image src="/notfound.png" width={500} height={200} alt="notfound" className="object-contain" />
      <h1>404 || Pages Not Found </h1>
    </div>
  );
};

export default custom404;
