import React from 'react';
import Card from './components/Card';
// @ts-ignore
import product1 from '../public/image/t-shirt-unsplash.jpg';

const App = () => {
    return (
        <div>
            <Card title="product 1" image={product1} price={99} />
        </div>
    )
};

export default App;
