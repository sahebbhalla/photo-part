import React,{useState,useEffect} from 'react';
import { capitalizeFirstLetter } from './utils/helpers';
import './App.css';
import About from'./components/About/index'
import Gallery from './components/Gallery';
import Nav from './components/Nav/index'
function App() {

  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

const [currentCategory,SetCurrentCategory]=useState(categories[0]);
useEffect(() => {
  document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory]);
  return (
    <div >
      <Nav
      categories={categories}
      SetCurrentCategory={SetCurrentCategory}
      currentCategory={currentCategory}
      />
        <main>
          <Gallery currentCategory={currentCategory}/>
          <About />
        </main>
    </div>
  );
}

export default App;
