import { useState, useEffect } from 'react';
import './App.css';
import { NavbarComponent, ListCategories, Hasil, Menu } from './components';
import { Row, Col } from 'reactstrap';
import axios from 'axios'
import API_URL from './utils/constants';


function App() {
  const [menu, setMenu] = useState([])
  
  useEffect(() => {
    axios.get(API_URL+"products")
    .then(res => {
      console.log(res)
      setMenu(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-2">
      <Row>
        <ListCategories />
        <Col>
          <h4><strong>Daftar Produk</strong></h4>
          <hr />
          <Row>
            {
              menu && menu.map(item => {
                return (
                  <Menu key={item.id} nama={item.nama} harga={item.harga}/>
                )
              })
            }
          </Row>
        </Col>
        <Hasil />
      </Row>

      </div>
    </div>
  );
}

export default App;
