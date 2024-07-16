import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Shopingcart() {

    return (
        <div>
                    {/* Hero Section Begin */}
                    <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                <i><FaBars /></i> 
                                <span>All departments</span>
                                </div>
                                {/* <ul >
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter & Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya & Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                    <li><a href="#">Fresh Bananas</a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <FaPhone />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

        <div>
         <div className="breadcrumb-section set-bg" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'150px'}}>
        <Container>
        <Row>
            <Col lg={12}><h2 className="shopbg_text text-center ">Shopping Cart </h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">Home- Shopping Cart </p></Col>
        </Row>
        </Container>
        </div>
        <div className="sidebar_space">

        </div>

        <Container>
            <Row>
                <Col lg={12}>
               < div class="shopingcart_table">
                        <table className="shopingcart_table01">
                            <thead>
                                <tr className="shopingcart_product shopingcart_row">
                                    <th className="shopingcart_product01">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="shopingcart_product">
                                    <td className="shopingcart_image">
                                       
                                        <h5> <img src="images/categories/cat-1.jpg" style={{width:'100px'}}/><span className="shopingcart_span p-4">Vegetable’s Package</span></h5>
                                    </td>
                                    <td className="shopingcart_price">
                                        $55.00
                                    </td>
                                    <td className="shopingcart_quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shopingcart_total">
                                        $110.00
                                    </td>
                                    <td className="shopingcart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                                <tr className="shopingcart_product">
                                    <td className="shopingcart_image">
                                    <h5><img src="images/categories/cat-2.jpg" style={{width:'100px'}}/><span className="shopingcart_span p-4">Vegetable’s Package</span></h5>
                                    </td>
                                    <td className="shopingcart_price">
                                        $55.00
                                    </td>
                                    <td className="shopingcart_quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shopingcart_total">
                                        $110.00
                                    </td>
                                    <td className="shopingcart_close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                                <tr className="shopingcart_product">
                                    <td className="shopingcart_image">
                                    <h5><img src="images/categories/cat-3.jpg" style={{width:'100px'}}/><span className="shopingcart_span p-4">Vegetable’s Package</span></h5>
                                    </td>
                                    <td className="shopingcart_price">
                                        $55.00
                                    </td>
                                    <td className="shopingcart_quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shopingcart_total">
                                        $110.00
                                    </td>
                                    <td className="shopingcart_close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Col>
            </Row>

            <Row>
                <Col lg={6} sm={12}>
                    <div className="shopingcart_shopbutton">
                        <p className="pt-2">CONTINUE SHOPPING</p>
                    </div>
                </Col>
                <Col lg={6} sm={12} className="update-cart-container">
                    <div className="update-cart-button shopingcart_shopbutton01">
                        <p className="pt-2">UPDATE CART</p>
                    </div>
                </Col>
         </Row>

         <Row>
            <Col lg={6} sm={12}>
            <div className="shopingcart_discount">
                <h4>Discount Codes</h4>
                <input type="text" placeholder="Enter Your coupon code "/><span className="shopingcart_coupon m-3">APPLY COUPON</span>
            </div>
            </Col>

            <Col lg={6} sm={12}>
                <div className="shopping-cart-subtotal">
                    <h4>Cart Total</h4>
                    <div className="shopping-cart-summary">
                        <h5 className="subtotal pt-4">
                            Subtotal
                            <span className="amount">${455}</span>
                        </h5>
                        <span className="shopingcart_line"></span>
                        <h5 className="total pt-4">
                            Total
                            <span className="amount">${455}</span>
                        </h5>
                    </div>
                    <button className="checkout-button">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </Col>

             </Row>

        </Container>
        </div>
        <br/><br/><br/>
        </div>
    ) ;
}
export default Shopingcart
