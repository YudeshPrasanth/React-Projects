import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Shopdetails() {

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
            <Col lg={12}><h2 className="shopbg_text text-center ">Vegetable’s Package</h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">Home- Vegetables- Vegetable’s Package </p></Col>
        </Row>
        </Container>
        </div>
        <div className="sidebar_space">

        </div>

        <Container>
            <Row>
                <Col lg={6} md={3} sm={12}>
                <div className="shopdetail_picture" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'600px'}}>

                </div>
                
                <div className="shopdetail_picture" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'10px',width:'50px'}}>

                </div>  
                <div className="shopdetail_picture" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'10px',width:'50px'}}>

                </div>  
                <div className="shopdetail_picture" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'10px',width:'50px'}}>

                </div>  
                <div className="shopdetail_picture" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'100px',width:'50px'}}>

                </div>  
                </Col>
            </Row>
        </Container>
        </div>

        </div>
    ) ;
}
export default Shopdetails
