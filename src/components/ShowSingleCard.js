import Image from 'next/image';
import Footer from './Footer';

const ShowSingleCard = ({ show }) => {
  return (
    <div className='relative mb-4 p-4 border border-gray-200 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-2'>{show.name}</h2>
      <div className='flex flex-col space-y-2'>
        <div className='bg-gray-200 bg-opacity-75 p-2 rounded-md'>
            <p className='text-sm font-semibold'>Type:</p>
            <p className='text-sm'>{show.type}</p>
        </div>
        <div className='bg-gray-200 bg-opacity-75 p-2 rounded-md'>
            <p className='text-sm font-semibold'>Language:</p>
            <p className='text-sm'>{show.language}</p>
        </div>
      </div>
      {show.image && (
        <div className='mt-4'>
          <Image
            src={show.image?.original}
            width={300}
            height={600}
            alt={show.name}
            className='rounded-md'
          />
          </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default ShowSingleCard;
