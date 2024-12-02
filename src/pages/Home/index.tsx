import Header from "../../components/Header";
import { ContactModalContainerHome, HomeBannerWrapper, HomeBodyContainer, SessionAgent, SessionBannersBottom, SessionCards, SessionContact, SessionFooter, SessionQuestions, SessionSlides, SessionSlidesWrapper} from "./styles";
import principalBanner from '../../assets/images/banner-principal-2.png';
import principalBanner2 from '../../assets/images/banner-principal-2.png';
import principalBannerMobile from '../../assets/images/banner-principal-2.png';
import principalBanner2Mobile from '../../assets/images/banner-principal-2.png';
import PseudoSearch from "../../components/PseudoSearch";
import CardPropertyHome from "../../components/CardPropertyHome";
import HouseImage from '../../assets/images/house-image.jpg';
import RightHouseImage from '../../assets/images/right-image-house.svg';
import logoHome from '../../assets/images/logo-branca-sem-fundo.png';
import {FaArrowRight, FaQuoteLeft} from 'react-icons/fa';
import AgentImage from '../../assets/images/perfil-corretor.png';
import {BsArrowRight} from 'react-icons/bs';
import Question from "../../components/Question";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact"; 

import { Ref, Suspense, lazy, useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CardService from "../../components/CardService";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import WhatsappButton from "../../components/WhatsappButton";
import About from "../../components/About";
import Informations from "../../components/Informations";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import PageNotFound from "../../components/PageNotFound";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import MediaQuery from "react-responsive";


type Banners = {
    img:string;
}

const Home = () => {

      

    const [url,setUrl]= useState((window.location.hostname));
    const [openModalContactBottom,setOpenModalContactBottom]=useState(true);

    console.log(url)
    const state = {
    items: [
      { image: principalBanner},
      { image: principalBanner2},
 
    ]
  }


  const state2 = {
    items: [
      { image: principalBanner2Mobile},
      { image: principalBannerMobile},
 
    ]
  }
  
   


    const handleToOpenModalContact= () =>{
        setOpenModalContactBottom(openModalContactBottom => !openModalContactBottom);
    }

    const ErrorHandler = () => {
        return <PageNotFound/>;
      }

      const getParamHeader = (goal:string) => {
        return goal;
      }
   
   
        
    return (
        <ErrorBoundary FallbackComponent={ErrorHandler}>
        <HomeBodyContainer>
            <Header onChange={getParamHeader}/>

            <HomeBannerWrapper id="search" icon={IoMdArrowForward }>
                <div className="title-search-container">
                <LazyLoadImage  effect="blur" src={logoHome} alt="principal-title"  className="principal-title"/>                    
                <PseudoSearch/>
                </div>
       
                <MediaQuery  query="(max-width: 1024px)">
                <Carousel              
              showStatus={false}
              showThumbs={false}    
              infiniteLoop={true}                
              autoPlay={true}
              interval={5000}
              renderArrowPrev={(clickHandler, hasPrev) => {
                return (           
                    <IoMdArrowBack onClick={clickHandler} className="arrow-prev" />                
                )
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                    < IoMdArrowForward  onClick={clickHandler} className="arrow-next" />                
                );
              }}>                                           
                  {state2.items.map(item => (
               <LazyLoadImage   effect="blur"  src={item.image as string} alt="banner principal"  className="img-principal-banner "/>  
                  ))                        
              }                 
                </Carousel>
                </MediaQuery> 

        <MediaQuery query="(min-width: 1024px)">
       
           <Carousel              
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}                
              autoPlay={true}
              interval={5000}
              renderArrowPrev={(clickHandler, hasPrev) => {
                return (           
                    <IoMdArrowBack onClick={clickHandler} className="arrow-prev" />                
                )
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                    < IoMdArrowForward  onClick={clickHandler} className="arrow-next" />                
                );
              }}>                                           
                  {state.items.map(item => (
               <LazyLoadImage   effect="blur"  src={item.image as string} alt="banner principal"  className="img-principal-banner "/>  
                  ))                        
              }                 
                </Carousel>
                </MediaQuery> 
                                                     
            </HomeBannerWrapper>

            <SessionCards>
            
                 <CardService/> 
                                 
           </SessionCards>
           
                    <SessionSlidesWrapper>
           <SessionSlides>
                <h2 className="subtitle">Imóveis em destaque</h2>
              
            <CardPropertyHome url={url}/>
            <a href="#search"><div className="button-wrapper-home" ><button className="button-see-more">PESQUISAR</button></div></a>
           </SessionSlides>
           </SessionSlidesWrapper>

           <SessionContact id="session-contact">
            <div className="houseImage-wrapper">
            <LazyLoadImage effect="opacity"  src={HouseImage} alt=""/>
            <LazyLoadImage effect="opacity"  src={RightHouseImage} alt="" className="houseImage-right"/>
            </div>
            
            <div className="right-side-sessionContact">
            <div className="title-subtitle-wrapper-sessionContact">
                <h2>Mande-nos uma mensagem para mais informações.</h2>
                <p>Vamos receber sua mensagem e entraremos em contato o mais rápido possível</p>
                </div>
                
                <Contact url={url}/>
                
              
                <span className="orClass">OU</span>
                <p className="message-to-open-chat">Caso você deseja mandar uma mensagem
                instantânia é só usar nosso <a href="#" className="link-chat-home">whatsapp</a> ao lado</p>
                </div>
           </SessionContact>

           <SessionAgent>
        
           <div className="session-agent-content-wrapper">   
            <div className="text-agent-wrapper-home">
            <FaQuoteLeft className="quote-icon-agent-home"/>
            <h3>Você tem sonhos, eu tenho a chave da solução!</h3>
            <p>CEO-Ubaldo Vasconcelos</p>
            </div>

            
            <div className="circle-wrapper">
            <div className="circle2-image-agent-home">
           
                <div className="circle1-image-agent-home">
              
                <LazyLoadImage effect="opacity"   src={AgentImage} alt="" className="img-agent-home" />
                  
                </div>  
              
            </div>
            </div>
            <p className="agent-name">CEO-Ubaldo Vasconcelos</p>
            </div> 
          
           </SessionAgent>
                  
     
            <SessionBannersBottom>
            
                <div className="image-banner-bottom-wrapper">

                <a href="#session-contact"><div className="text-wrapper-image-banner" onClick={handleToOpenModalContact}>
                        <p className="first-text-image-banner">Entre em contato conosco</p>
                        <span className="second-text-image-banner">Anuncie seu imóvel</span>
                        <a href="#session-contact"><button className="button-banner-bottom">Contactar</button></a>
                        <BsArrowRight className="icon-image-banner-bottom-home"/>
                    </div></a>           
                </div>          
                
            </SessionBannersBottom>
       
            <SessionQuestions id="about">
                <div className="questions-content-wrapper">
                    <h2  className="title-session-questions">Navegação</h2>      
                <Question/>    
                <About />
            
                </div>
            </SessionQuestions>

            <SessionFooter>
                <Footer />
            </SessionFooter>
          <WhatsappButton/>
        </HomeBodyContainer>
        </ErrorBoundary>
    )
    }
    export default Home;

 