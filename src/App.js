import stefanLand from './stefanLandscape.png';
import oviLand from './eu.jpg';
import tr1 from './1.png';
import styles from './App.module.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import $ from "jquery";

function MainA() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.hdbg}>
        <div className={styles.aftxt}>
          <div className={styles.img} style={{"--srcLand": stefanLand}}></div>
          <div className={styles.timeRead}> 
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6L12 12 16 14"></path>
          </svg><h1>1 minut (în aproximare)</h1></div>
          <h1>Ștefan Odobleja a fost un autor, filozof, medic militar și scriitor român, precursor mondial al ciberneticii generalizate pe care el însuși a denumit-o „psihologia consonantistă”.</h1>
          <h1>În 1909, Ștefan Odobleja începe școala primară în satul natal, terminând cele cinci clase ale ciclului primar din satul său de origine în fiecare an cu premiul I. A urmat liceul Traian din Turnu-Severin, unde a învățat foarte bine limba franceză, fapt care i-a permis mai târziu să-și scrie și publice operele sale fundamentale la Paris, în Franța, în limba franceză. După terminarea liceului, Ștefan Odobleja se înscrie la facultatea de medicină, secția militară.</h1>
         <div className={styles.flexText}> <h1>Datorită contribuțiilor sale remarcabile, îndelung ignorate și nerecunoscute, Ștefan Odobleja a fost ales membru post-mortem al Academiei Române. Ștefan a decedat la vărstă de 75 de ani, pe data de 4 decembrie a anului 1978.</h1>    
         <Link to="/opere">
        Ce a scris autorul?
        </Link></div>
             <a href="https://ro.wikipedia.org/wiki/%C8%98tefan_Odobleja">Citește mai mult pe Wikipedia</a>
        </div>
        <div className={styles.bgimg}/>
      </div>
    </div>
  );
}
function MainB() {
  return (
    <div className={styles.thebooks}>
       <div className={styles.hdbg}>
         <div className={styles.bgimg}></div>
        <div className={styles.aftxt}></div>
        <div className={styles.tableel}>
     <div className={styles.tableela}>
       <img height="200" src={tr1}></img>
      <div>
      <h1 className={styles.year}>1990</h1>
       <h1>Accidentele de automobil</h1>
     </div>
     </div>
     <div className={styles.tableela}>
       <img height="200" src="https://odobleja.ro/wp-content/uploads/2020/07/1938-Paris.jpg"></img>
      <div>
      <h1 className={styles.year}>1938</h1>
       <h1>Activitatea și opera</h1>
     </div>
     </div>
     <div className={styles.tableela}>
       <img height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3nKjzHS9kqCAsWrF8UrA6Jjcn9tjP6XGjw&usqp=CAU"></img>
      <div>
      <h1 className={styles.year}>1939</h1>
       <h1>Psychologie consonantiste II</h1>
     </div>
     </div>
     <div className={styles.tableela}>
       <img height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3nKjzHS9kqCAsWrF8UrA6Jjcn9tjP6XGjw&usqp=CAU"></img>
      <div>
      <h1 className={styles.year}>1978</h1>
       <h1>Psihologia consonantistă și cibernetica</h1>
     </div>
     </div>
     <div className={styles.tableela}>
       <img height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3nKjzHS9kqCAsWrF8UrA6Jjcn9tjP6XGjw&usqp=CAU"></img>
      <div>
      <h1 className={styles.year}>1982</h1>
       <h1>Psihologia consonantistă</h1>
     </div>
     </div>
     <div className={styles.tableela}>
       <img height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3nKjzHS9kqCAsWrF8UrA6Jjcn9tjP6XGjw&usqp=CAU"></img>
      <div>
      <h1 className={styles.year}>1993</h1>
       <h1>Apariția ciberneticii pe pământ românesc</h1>
     </div>
     </div>
   </div>
   <div>
   <h1>În decursul vieții, Ștefan Odobleja a practicat medicina și a scris importante lucrări despre cibernetică. Prin activitatea sa în domeniul ciberneticii și-a atras ostilitatea regimului comunist, iar spre sfârșitul vieții s-a aflat sub supravegherea organelor de securitate. O parte din operele sale au fost publicate după moartea sa.</h1>
   <Link style={{display: "flex", justifyContent: "flex-start"}}to="/bibliografie">
      Spre bibliografie
      </Link>
   </div>
   </div>
    </div>
  );
}

function Software() {
  return (
    <div className={styles.infoPage}>
      <div className={styles.hdbg}>
        <div className={styles.aftxt}>
         
          <div className={styles.timeRead}> 
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6L12 12 16 14"></path>
          </svg><h1>3 minute și 50 secunde (în aproximare)</h1></div>
          <h1>
          MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
          </h1>
          <h1>MIT License

Copyright (c) 2021 Ernesto Garcia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</h1>
    <h1>Copyright OpenJS Foundation and other contributors, https://openjsf.org/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</h1>
        </div>
        <div className={styles.bgimg}></div>
      </div>
    </div>
  );
}

function Bibliografie() {
  return (
    <div className={styles.infoPage}>
    <div className={styles.hdbg}>
      <div className={styles.aftxt}>
       
        <div className={styles.timeRead}> 
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6L12 12 16 14"></path>
        </svg><h1>40 secunde (în aproximare)</h1></div>
     <h1>Ștefan, îndrăgit în literatură românească, nu numai în cibernetică, ci nu numai. De Ștefan Odobleja amintesc, prin numele ce îl poartă, trei licee - unul în Turnu-Severin, unul in Craiova, altul în București, o stradă - cea pe care a locuit savantul, Spitalul Militar de Urgență din Craiova. Satul în care s-a născut, în 1902, numit până în 1968 Valea Izvorului, și devenit prin lege adoptată de Parlament în 2004 "Ștefan Odobleja".
     </h1>
     <h1>În anul 2003, la Craiova, opera  "între „aventura științifică” și patimile glorificării" de Hinoveanu a fost publicată în revista Scrisul Românesc.</h1>
     <h1>În anul 1998, la 10-15 august " „Two Specialists in Cybernetics: Stefan Odobleja and Norbert Weiner. Common and Different Features" de Jurcău și Nicolae a fost publicată în Twentieth World Congress of Philosophy în Bostol din statele Massachusetts.</h1>
     <h1>În onoarea sa a fost înființată „Academia de Cibernetică din Elveția”, un forum finanțat de Iosif Constantin Drăgan.</h1>
     <Link style={{paddingBottom: "1rem", paddingTop: "1rem"}} to="/software">
      Vezi bibliografia proiectului
      </Link>
      <Link to="/info">
     informații despre acest site
      </Link>
      </div>
     
      <div className={styles.bgimg}></div>
    </div>
  </div>
  );
}

function MainC() {
  return (
    <div className={styles.infoPage}>
      <div className={styles.hdbg}>
        <div className={styles.aftxt}>
          <div className={styles.img}>
           <h1>OVIDIU-RUBEN CĂPRARU</h1>
          </div>
          <div className={styles.timeRead}> 
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6L12 12 16 14"></path>
          </svg><h1>1 minut și 20 secunde (în aproximare)</h1></div>
          <h1>Numele meu este Ovidiu Căpraru, elev, cu o experienţă de dezvoltare software web de mai bine de cinci ani, am realizat acest site web pentru concursul #CICREST 2022: Inventivitate şi Creativitate în Ştiinţă şi Tehnologie, în cadrul profesorului coordonator Oana Antonie, profesor de Tehnologia informației și a comunicațiilor, instituția Liceului Tehnologic Nr.2 Târgu-Jiu</h1>
          <h1></h1>
         <div className={styles.flexText}> <h1>Pentru cea mai bună experienţă, am folosit o biblotecă Creative Commons (CC) oferită de Google LLC (ce include interfața text, fonturi și pictograme)</h1> <h1>Software-uri terțe au ajutat la dezvoltarea acestui site, licențiate MIT (Licența MIT este o licență permisivă de software liberă, originară de la Massachusetts Institute of Technology la sfârșitul anilor 1980). Prim urmare bibloteca gazdă folosită pentru dezvoltare, ReactJS (un framework pentru JavaScript)</h1><h1>O mică parte de conținut este preluat de pe platforma de enciclopedie liberă Wikipedia.</h1> 
         <Link to="/software">
         Vezi licențele aici
        </Link></div>
             <a href="https://ro.wikipedia.org/wiki/Creative_Commons">Citește mai mult pe Wikipedia</a>
        </div>
        <div className={styles.bgimg}/>
      </div>
    </div>
  );
}
setInterval((function(){
  document.getElementsByClassName(styles.currentTime)[0].innerText = new Date().getHours() + " : " + new Date().getMinutes()  + " : " + new Date().getSeconds();
}), 500);
export default  class StateMain extends React.Component {
  state = {
    isDone: false
  }
  componentDidMount() { 
    if($(window).scrollTop() > 25) {
      $('.' + styles.header).addClass(styles.activeScrolled)
    }
     setTimeout(()=> {this.setState({
       isDone: true
     })}, 1750)
     $(window).on('scroll', function(){
      if($(window).scrollTop() < 25) {
        $('.' + styles.header).removeClass(styles.activeScrolled)
      }
       if($(window).scrollTop() > 25) {
         $('.' + styles.header).addClass(styles.activeScrolled)
       }
     
     })
  }
  render ()  {
  return (
    <>
     {this.state.isDone
        ? <></>
        : <div className={styles.isLoading}>
          <h1>#CICREST2022</h1>
        </div>
      }
    <div className={styles.App}>
      <div className={styles.header}>
       {/* <div classNa-me={styles.menuF}><div className={styles.menu}><i></i></div></div> */}
        <div className={`${styles.headerNav} ${styles.headerNavig}`}>
        <Link className={styles.activ2e} to="/">
          Despre
        </Link>
        <Link to="/opere">
         Opere
        </Link>
        <Link to="/bibliografie">
         Bibliografie
        </Link>
        <Link to="/info">
         INFO  
        </Link>
        </div>
        <h1>ȘTEFAN ODOBLEJA</h1>
        <div className={styles.jh1}>
        <div className={styles.headerNav}>
         <a href="http://stefanodoblejacraiova.ro/">#CICREST2022</a>
        </div>
        </div>
      </div>
      <div className={styles.MainX}>
      <Routes> 
      <Route exact path='/' element={<MainA/>}></Route>
      <Route exact path='/opere' element={<MainB/>}></Route>
      <Route exact path='/info' element={<MainC/>}></Route>
      <Route exact path='/bibliografie' element={<Bibliografie/>}></Route>
      <Route exact path='/software' element={<Software/>}></Route>
      </Routes> 
      </div>
      <div className={styles.footer}>
        <div className={styles.headerNav}><a href="http://ct2tgjiu.ro/">#LT2TGJIU</a></div>
        <div className={styles.footerc}>
        <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6L12 12 16 14"></path>
    </svg>
        <h3 className={styles.currentTime}></h3>
        </div>
        <div className={styles.footerd}>
        <div className={styles.headerNav}><a href="https://www.stopwar.org.uk/">#STOPTHEWAR</a></div>
        </div>
      </div>
    </div>
    </>
  );
  }
}

