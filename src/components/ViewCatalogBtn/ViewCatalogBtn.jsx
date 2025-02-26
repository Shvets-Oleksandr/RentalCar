import { useNavigate } from 'react-router-dom';

const ViewCatalogBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog');
  };

  return <button onClick={handleClick}>View Catalog</button>;
};

export default ViewCatalogBtn;
