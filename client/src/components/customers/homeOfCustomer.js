import React from 'react';
import Header from '../Header/header.js';
import Footer from '../Header/footer.js';
import './customersStyle.css';
import magnifierPhoto from '../../images/magnifierPic.png';
import costEstimation from '../../images/costEstimation.png';
import workerLabors from '../../images/workersLabors.png';
import buildingModels from '../../images/buildingModels.png';
import productStore from '../../images/productStore.png';
import {useNavigate} from 'react-router-dom';


const CustomersHome = () =>{

    const navigator = useNavigate();
    
    const handleLaborSearch = () =>{
        navigator('/Customers/CustomersHome/WorkersSearch');
    }

    const handleCostEstimation = () =>{
        navigator('/Customers/CustomersHome/CostEstimation');
    }

    return(
        <>
            <Header/>
                <div maxWidth='lg' className='toDividePage'>
                    <div className='divOne'>
                        <h1 className = 'mainHead'>Hello,</h1>
                        <h1 className = 'mainHead'>USERNAME</h1>
                        <h3 className = 'askingLine'>What are you <br/>looking for?</h3>
                        <img src={magnifierPhoto} className='mangnifierPhoto' alt="magnifierPic"/>
                    </div>
                    <div className='divTwo'>
                        <div className='divBox sec1'>
                            <img src={workerLabors} className='btnImg1' alt='workerLabor' onClick={handleLaborSearch}/>
                            <img src={costEstimation} className='btnImg1' alt='workerLabor' onClick={handleCostEstimation}/>
                        </div>
                        <div className='divBox sec2'>
                            <img src={buildingModels} className='btnImg1' alt='workerLabor'/>
                            <img src={productStore} className='btnImg1' alt='workerLabor'/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default CustomersHome;