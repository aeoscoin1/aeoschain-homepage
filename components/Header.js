
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleLang = () => {
    const newLocale = router.locale === 'en' ? 'ko' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">AeosChain</div>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">{t('menu.home')}</Link>
        <Link href="/about" className="hover:underline">{t('menu.about')}</Link>
        <Link href="/whitepaper" className="hover:underline">{t('menu.whitepaper')}</Link>
        <Link href="/contact" className="hover:underline">{t('menu.contact')}</Link>
        <button onClick={toggleLang} className="ml-4 px-2 py-1 border border-white rounded">
          {router.locale === 'en' ? '한국어' : 'English'}
        </button>
      </nav>
    </header>
  );
}
