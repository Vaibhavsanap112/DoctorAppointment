import React from 'react'
import Header from '../Components/Header';
import SpecialityMenu from '../Components/SpecialityMenu';
import TopDoctors from '../Components/TopDoctors';
import Banner from '../Components/Banner';

function Home() {
  return (
    <div>
     <Header></Header>
     <SpecialityMenu></SpecialityMenu>
     <TopDoctors></TopDoctors>
     <Banner></Banner>
      
    </div>
  )
}

export default Home;
