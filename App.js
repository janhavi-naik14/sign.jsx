
import image from './slider.png';
import ImageSlider from './ImageSlider';
const App  = () => {
  const slides =[
    {url: image, title:"slide"},
    {url: image, title:"slide"},
    {url: image, title:"slide"},

  ];
  const containerStyles ={
    width:'500px',
    height:'280px',
    margin: '0 auto',
};
  return (
    <div >
      <div style={containerStyles}>
      <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default App;
