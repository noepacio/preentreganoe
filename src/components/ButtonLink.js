import React from 'react';
import Link from 'next/link';

const ButtonLink = ({ id }) => {
  return <Link className=' bg-black max-w-[120px] text-white border-solid py-2 px-2 rounded-2xl hover:bg-white hover:text-black hover:border-solid border-black border-2' href={`/show/${id}`}>View Movie</Link>;
};

export default ButtonLink;
