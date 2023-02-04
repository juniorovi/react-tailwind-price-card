import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime Free',
                'Unlimited Deals',
                'Localized deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on Free',
                'Unlimited Deals',
                'Localized deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Everything on Regular',
                'Unlimited Deals',
                'Localized deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of The Town</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestias commodi, cum repellat laboriosam ut enim recusandae quos harum odit!</p>
            <div className='grid md:grid-cols-3 gap-2 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;