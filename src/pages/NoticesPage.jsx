import Search from '../components/Search/Search';
import TagsArray from '../components/TagsArray/TagsArray';
import PetList from '../components/PetList/PetList';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  closeModalAttention,
  closeModalDeleteAdverstiment,
  closeModalPetCardDetails,
} from 'redux/global/globalSlice';
import {
  selectIsModalAttentionOpen,
  selectIsModalDeleteAdverstimentOpen,
  selectIsModalPetCardDetailsOpen,
} from 'redux/global/globalSelectors';
import ModalPetCardDetails from 'components/ModalPetCardDetails/ModalPetCardDetails';
import { Modal } from 'components/Modal/Modal';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import ModalDeleteAdverstiment from 'components/ModalDeleteAdverstiment/ModalDeleteAdverstiment';

const NoticesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? undefined;
  const dispatch = useDispatch();

  const isModalPetCardDetailsOpen = useSelector(
    selectIsModalPetCardDetailsOpen
  );

  const handleCloseModalPetCardDetails = () => {
    dispatch(closeModalPetCardDetails());
  };

  const isModalAttentionOpen = useSelector(selectIsModalAttentionOpen);

  const handleCloseModalAttention = () => {
    dispatch(closeModalAttention());
  };

  const isModalDeleteAdverstimentIsOpen = useSelector(
    selectIsModalDeleteAdverstimentOpen
  );
  const handleCloseModalDeleteAdverstiment = () => {
    dispatch(closeModalDeleteAdverstiment());
  };
  return (
    <>
      <Search
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        titleSearch={'Find your favorite pets'}
      />
      <TagsArray />
      <PetList searchQuery={productName} />
      {isModalPetCardDetailsOpen && (
        <Modal closeReducer={handleCloseModalPetCardDetails}>
          <ModalPetCardDetails />
        </Modal>
      )}
      {isModalAttentionOpen && (
        <Modal closeReducer={handleCloseModalAttention}>
          <ModalAttention />
        </Modal>
      )}
      {isModalDeleteAdverstimentIsOpen && (
        <Modal closeReducer={handleCloseModalDeleteAdverstiment}>
          <ModalDeleteAdverstiment />
        </Modal>
      )}
    </>
  );
};

export default NoticesPage;
