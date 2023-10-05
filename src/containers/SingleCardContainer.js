import { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import ShowSingleCard from '@/components/ShowSingleCard';
import Navbar from '@/components/Navbar';

const SingleCardContainer = ({ id }) => {
  const { show, getShow, showLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
    }
  }, [id, getShow]);

  return (
    <>
      <Navbar> </Navbar>
      {showLoading && <p>LOADING....</p>}
      {!showLoading && <ShowSingleCard show={show} imageUrl="URL_DE_LA_IMAGEN_A_CAMBIAR" />}
    </>
  );
};

export default SingleCardContainer;

