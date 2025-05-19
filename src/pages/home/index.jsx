import React, {useState} from 'react';
import foto from './foto/Rectangle 18.png'
import foto2 from './foto/unsplash_sELcHR_bGVs.png'
import foto3 from './foto/unsplash_519_90ncAds.png'
import './main.css'

function Index() {
    const scenery = [
        {
            id:1,
            img:foto,
            title:'Bali, Indonesia.',
            comment:'Bali is a beautiful tourist spot and is visited by many travelers. ',
        },{
            id:2,
            img:foto2,
            title:'Bali, Indonesia.',
            comment:'Bali is a beautiful tourist spot and is visited by many travelers. ',
        },{
            id:3,
            img:foto3,
            title:'Bali, Indonesia.',
            comment:'Bali is a beautiful tourist spot and is visited by many travelers. ',
        },{
            id:4,
            img:foto,
            title:'Bali, Indonesia.',
            comment:'Bali is a beautiful tourist spot and is visited by many travelers. ',
        },{
            id:5,
            img:foto,
            title:'Bali, Indonesia.',
            comment:'Bali is a beautiful tourist spot and is visited by many travelers. ',
        },{
            id:6,
            img:foto,
            title:'Bali, Indonesia.',
            comment:'Bali is a beautiful tourist spot and is visited by many travelers. ',
        },{
            id:7,
            img:foto,
            title:'Bali, Indonesia.',
            comment:'Bali is a beautiful tourist spot and is visited by many travelers. ',
        },
    ]


    const [hovered, setHovered] = useState(false);
    const Card = {
        with: '100%',
        height: hovered ? '460px' : '350px',
        transition: 'all 0.5s',
        position: 'relative',
        borderRadius: '10px',
        boxShadow: hovered ? '0 0 10px rgba(0,0,0,0.5)': "",
        overflow: 'hidden',
    }
    const Foto = {
        with: '100%',
        height: '350px',
        objectFit: 'cover',
        borderRadius: '10px',
        overflow: 'hidden',
    }

    return (
        <div>
            <div className={'header'}>
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                           <b className={'text-[100px] leading-[1.0] text-white m-0 '}>Make in <br/>
                               your journey.</b>
                           <p className={'text-white mt-4 fs-5'}>Explore the world with what you love beautiful <br/> natural beauty.</p>
                           <div className="w-100 h-[50px] bg-white d-flex justify-content-around align-items-center rounded-xl">
                                   <div>Location ▼</div>
                                   <div>Date ▼</div>
                                   <div>People ▼</div>
                               <button className={'btn btn-dark'} type="button">
                                   Explore now
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <div className={'mt-[100px]'}>
                <h1 className={'text-center'}>
                    Explore new worlds with <br/>
                    exotic natural scenery
                </h1>
            </div>
            <div className={'carusel h-[500px] '}>
               <div className="container carusel gap-3">
                       {
                           scenery.map((item, index)=>(
                               <div className="col-4" key={index}>
                                   <div className="Card" style={Card}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                       <img style={Foto} className={'z-5 hover:scale-105 duration-300'} src={item.img} alt=""/>
                                       <div className={'container position-absolute bottom-0 z-[-5]'}>
                                           <div className="row">
                                               <div className="col-12">
                                                   <h5><b>{item.title}</b></h5>
                                                   <p>{item.comment}</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           ))
                       }
               </div>
            </div>
        </div>
    );
}

export default Index;