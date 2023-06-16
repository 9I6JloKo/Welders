import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [refs, setRefs] = useState({});
  const [defaultHeader, setDefaultHeader] = useState(false);
  const homeRef = useRef();
  const aboutUsRef = useRef();
  const statisticsRef = useRef();
  const programRef = useRef();
  const galleryRef = useRef();
  const teachersRef = useRef();
  const contactsRef = useRef();
  const separatorRef = useRef();
  const faqRef = useRef();

  function checkAuth() {
    const url = window.location.pathname;
    const header = url === '/' || url === '/sign-in' ? true : false;
    setDefaultHeader(header);
  }

  useEffect(() => {
    setRefs({
      homeRef,
      aboutUsRef,
      statisticsRef,
      programRef,
      galleryRef,
      teachersRef,
      contactsRef,
      separatorRef,
      faqRef
    });
    checkAuth();
  }, []);

  return (
    <>
      <Header refs={refs} defaultHeader={defaultHeader} />
      <Content refs={refs} />
      <Footer />
    </>
  );
}

export default App;
