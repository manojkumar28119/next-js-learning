import Image from 'next/image';

export default function HomeImage() {
  return (
    <Image 
      src="https://images.unsplash.com/photo-1728607424960-329fa60f73d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
      alt="img"
      width={500}
      height={500}
    className='block md:hidden'
    />
  );
}
