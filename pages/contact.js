
import Header from '../components/Header'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Page() {
  return (
    <>
      <Header />
      <p className='text-center mt-10'>Contact us at contact@aeoschain.com</p>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
