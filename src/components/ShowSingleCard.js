import Image from 'next/image';

const ShowSingleCard = ({ show }) => {
  return (
    <div className='relative bg-gray-900 mb-0'>
      <h2 className='flex justify-between items-center h-14 bg-gray-900 mt-0 px-5 text-white ml-4 pt-12'>{show.name}</h2>
      <div className='relative text-center'>
        <h2 className='absolute items-center left-80 text-white text-sm bg-opacity-75 py-2 px-5 '>Type: {show.type}</h2>
        <h2 className='absolute items-center left-80 text-white text-sm bg-opacity-75 py-10 px-5 '>Language: {show.language}</h2>
      </div>
      {show.image && (
        <Image className='flex items-center ml-8'
          src={show.image?.original}
          width={300}
          height={600}
          alt={show.name}
        />
      )}
    </div>
  );
};

export default ShowSingleCard;
