import Image from 'next/image';

const LoginImage = () => {
  return (
    <>
      <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
        <Image
        src="https://readymadeui.com/login-image.webp"
        alt="Dining Experience"
        className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
        width={800}  // Ajusta el ancho según tus necesidades
        height={400} // Ajusta la altura según tus necesidades
        layout="responsive"
      />
      </div>
      </>
  )
}

export default LoginImage
