import ShowCard from '@/components/ShowCard';
import { useAppContext } from '@/contexts/AppContext';
import Navbar from '@/components/Navbar';

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section id='peliculas-section'>
      <h2 className='font-bold'>Películas</h2>
      {!loading && (
        <div className='inner my-0 mx-auto max-w-[1200px] px-4 pb-40'>
          <div className='grid grid-cols-12 gap-4 gap-y-6'>
            {shows.map((actualShow, index) => {
              return <ShowCard actualShow={actualShow} key={index} />;
            })}
          </div>
        </div>
      )}
      <div className='py-10 px-8'>
        <h2 className='font-bold' id='series-section'>Proximamente...</h2>
      </div>
      <div className='py-10 px-8'>
        <h2 className='font-bold' id='about-section'>Sobre Nosotros</h2>
        <p className='text-gray-600 leading-7'>
          Somos un equipo apasionado de entusiastas del cine y las series. 
          Nuestra misión es proporcionarte las mejores recomendaciones y 
          contenido relacionado con el mundo del entretenimiento. 
          Nos encanta compartir nuestras críticas, noticias y reseñas de 
          las últimas películas y series para que estés siempre al día. 
          ¡Bienvenido a nuestra comunidad de amantes del cine!
        </p>
      </div>
      {loading && <p className='w-full flex justify-center'>Loading...</p>}
    </section>
  );
};

export default CardsContainer;
