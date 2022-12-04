import Aggregator from "./Aggregator"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FilterBar({selectGenderFilterType, selectFilterType, sorting}){
    return(
    <Nav>
        <Container>
          <h4> filters</h4>
          <Row>
          <h5> gender: </h5>
                <Col sm={4}>
                  <form>
                    <select name="selectList" onChange={selectGenderFilterType}> 
                      <option value="all"> None </option>
                      <option value="Womens"> WOMENS </option>
                      <option value="Mens"> MENS</option>
                    </select>
                  </form>
                </Col>
          </Row>
          <Row>
          <h5> style: </h5>
                <Col sm={4}>
                  <form>
                    <select name="selectList" onChange={selectFilterType}> 
                      <option value="all"> all </option>
                      <option value="TEES"> tees </option>
                      <option value="PANTS"> pants</option>
                      <option value="JACKETS"> jackets</option>
                      <option value="ACCESSORY"> accessories</option>

                    </select>
                  </form>
                </Col>
          </Row>
          <Row>
            <h5> by price: </h5>
            <Col sm={4}>
                <form>
                    <Nav.Item> <input type='radio' name='sort' id="price" value='price-lh' onChange={sorting} />
                    <label for="sort"> highest first</label> </Nav.Item>

                    <Nav.Item> <input type='radio' name='sort' id="price" value='price-hl' onChange={sorting}/>
                    <label for="sort"> lowest first</label> </Nav.Item>
                </form>
            </Col>
          </Row>
          <Row>
          <br>
          </br>
          </Row>
          
        </Container>
        </Nav>
    );
}