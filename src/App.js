import './App.css';
import Gallery from './Component/Gallery/Gallery.jsx';
import Header from './Component/Header/Header';
import Heading from './Component/Heading/Heading.jsx';
import Promotion from './Component/Promotion/Promotion.jsx';
import data from './Data/Data.js';


const {header, promotion, heading, gallery} = data;

function App() {

  return (
    <>
      <Header header={header} />
      <Promotion promotion={promotion}></Promotion>
      <Heading heading={heading}></Heading>
      <Gallery gallery={gallery}></Gallery>
    
    </>
  );
}
export default App;
