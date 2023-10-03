import Search from '../components/Search/Search';
import TagsArray from '../components/TagsArray/TagsArray';
import PetList from '../components/PetList/PetList';

import { useSearchParams } from 'react-router-dom';

const NoticesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? undefined;

  return (
    <>
      <Search
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        titleSearch={'Find your favorite pets'}
      />
      <TagsArray />
      <PetList searchQuery={productName} />
    </>
  );
};

export default NoticesPage;
