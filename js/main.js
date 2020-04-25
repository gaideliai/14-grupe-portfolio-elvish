"use strict";
import Services from './components/Services.js';
import Header from './components/Header.js';
import {ProgressBarX3,AboutAs} from './components/about.js';
import GreatPeple from './components/greatPeple.js'
import SectionHeading from './components/SectionHeading.js';
import Achievements from './components/Achievements.js';
import Experience from './components/Experience.js';
import Portfolio from './components/Portfolio.js';


//------hedre

new Header('header nav');

const DOMhamburger = document.querySelector('.hamburger');
DOMhamburger.addEventListener('click', () => {
    document.querySelector('header nav').classList.toggle('show');
})


// ----------aboutME-----------
const Development  = new ProgressBarX3("Development",'WordPress','Photoshop',80,59,88,".myProgress1",1);
const Html  = new ProgressBarX3("Html",'Css','Asp.net',96,70,58,".myProgress2",4);
const Aboutparferst = new AboutAs ('.titleShort');
const AbotHello = new AboutAs ('.aboutH2_1');
const Abotimg = new AboutAs ('.aboutimg_1');
const aboutUx = new AboutAs ('.aboutMeh2_1');
const aboutLong = new AboutAs ('.aboutPlomg_1');


 
// ----------aboutME-----------
new ProgressBarX3("Development",'WordPress','Photoshop',80,59,88,".myProgress1",1);
new ProgressBarX3("Html",'Css','Asp.net',96,70,58,".myProgress2",4);
new AboutAs ('.titleShort');
new AboutAs ('.aboutH2_1');
new AboutAs ('.aboutimg_1');
new AboutAs ('.aboutMeh2_1');
new AboutAs ('.aboutPlomg_1');


// find all attr with 'data-h2' to create H2 elements
const allDataH2 = document.querySelectorAll('[data-h2],[data-h2-bold],[data-place]');
for ( let i=0; i<allDataH2.length; i++ ) {
    new SectionHeading( allDataH2[i] );
} 
//create four achievements blocks
new Achievements('#achievements > .row');
new Experience ('#experience .row:nth-child(3)');
new GreatPeple ('.greatp','.greatimg')
new Portfolio ('#portfolio > .row:nth-child(3) > .col-12');

// -----------Our Services-----------
new Services ('.ServTabl');