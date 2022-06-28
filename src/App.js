import Shoes from './Components/Shoes/Shoes';
import s1  from "./Components/assets/images/Adidas.jpg"
import s2  from "./Components/assets/images/Carl.jpg"
import s3  from "./Components/assets/images/Newbalance.jpg"
import s4  from "./Components/assets/images/Nike.jpg"
import s5  from "./Components/assets/images/Underarmour.jpg"
import Clock from './Components/Clock/Clock';
import "./Components/Shoes/Shoes.css"

function App() {
  return (

    <div>
      <div className='header'>
        <h1>Shoes Store</h1>
        <Clock/>
      </div>
      <div className='container'>
        <div>
          <Shoes name="ADIDASS" size={40} price={"150$"} img={s1} />
        </div>
        <div>
          <Shoes name="CARL" size={42} price={"300$"} img={s2} />
        </div>
        <div>
          <Shoes name="NEW BALANCE" size={38} price={"350$"} img={s3} />
        </div>
        <div>
          <Shoes name="NIKE" size={43} price={"200$"} img={s4} />
        </div>
        <div>
          <Shoes name="UNDERARMOUR" size={39} price={"300$"} img={s5} />
        </div>

      </div>
    </div>
  );
}

export default App;
