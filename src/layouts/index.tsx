import { Outlet } from 'react-router-dom';
import Footer from '~/modules/Footer';
import Header from '~/modules/Header';
import Modal from '~/modules/Modal';

export const DefaultLayout: React.FC = () => (
  <>
    <Header />
    <Modal />
    <Outlet />
    <Footer />
  </>
);
