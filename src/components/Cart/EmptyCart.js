import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button';

export default function EmptyCart() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-10 max-auto text-center text-title">
                <h1>your cart is currently empty</h1>
                <Link to="/" className="ml-auto">
                    <ButtonContainer>
                        <span>
                           Continue Shopping
                        </span>
                    </ButtonContainer>
                </Link>
            </div>
        </div>
    </div>
  );
}
