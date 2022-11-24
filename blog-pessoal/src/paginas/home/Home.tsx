import React from 'react';
import './Home.css';

let nome = 'Jay Karol'

function Home() {
    return (
        <div>
        <div className='container-fluid row d-flex justify-content-center col-md-6'>
            <h1 className='fonte'>Esse é meu texto</h1>
            <h2>{nome}</h2>
            <p className='p-10 justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga natus recusandae, deserunt aliquam iste quod magnam consequatur ut. Sed perspiciatis doloribus placeat quas dolor quasi, aliquam repellendus quisquam distinctio.</p>
            <p className='p-10 justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis natus sit at vel, pariatur deserunt maxime nobis quia possimus ratione, qui omnis cumque ea tempora? Qui pariatur natus veniam?</p>
            </div>
            <div>
            <img className='center justify col-md-6' src="https://i0.wp.com/techwek.com/wp-content/uploads/2021/10/top-papel-de-parede-masculino.jpg?fit=564%2C1002&ssl=1" alt="mascaras" />
        </div>
        </div>
    );
}

export default Home;