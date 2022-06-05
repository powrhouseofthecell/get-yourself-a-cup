import { useRouter } from 'next/router';
import Head from 'next/head';

const Something = () => {
   const router = useRouter();
   const value = router.query.dy;
   return (
      <div>
         <Head>
            <title>{value}</title>
         </Head>
         <h2>Page {value}</h2>
      </div>
   );
};

export default Something;
