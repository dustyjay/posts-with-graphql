import renderPage from './render-page';

const RandomPage = () => {
  return renderPage(async () => {
    return <div>Random Page</div>;
  });
};

export default RandomPage;
