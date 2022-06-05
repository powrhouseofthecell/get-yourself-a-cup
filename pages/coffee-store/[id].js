import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
   const router = useRouter();
   const id = router.query.id;
   return (
      <>
         <Link href='/'>
            <a>Go back to home</a>
         </Link>
         <h1>This is a coffee store with id {id}</h1>;
      </>
   );
};

export default CoffeeStore;
