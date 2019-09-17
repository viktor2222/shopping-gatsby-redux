/* eslint-disable no-sequences */
import React from 'react'
import { inject, observer } from 'mobx-react'
import { Fade } from 'react-reveal'
import { CustomModal } from '..'
import { CartProductItem } from '../CartProductItem/cartProductItem'
import { BuyBtn } from '../../../styles'
import { SumCount, CloseButton } from './styled'

const customStyles = {
  content: {
    top: '50%',
    left: 'auto',
    right: '0',
    bottom: 'auto',
    height: '100vh',
    borderRadius: 'none',
    maxWidth: '350px',
    width: '100%',
    overflow: 'hidden',
    transform: 'translateY(-50%)',
  },
}

export const Cart = inject('cartStore')(
  observer(({ cartStore }) => (
    <CustomModal isOpen={cartStore.isShowCart} cartModal={customStyles}>
      <Fade right cascade>
        <CloseButton onClick={() => cartStore.hideCart()} />
        {cartStore.productCart.map(i => (
          <CartProductItem
            key={i.id}
            {...i}
            removeWithCart={() => cartStore.removeTodoCart(i.id)}
          />
        ))}
        <SumCount>
            Total: $
          {cartStore.totalSum}
        </SumCount>
        <BuyBtn
          onClick={() => (cartStore.showCheck(), cartStore.hideCart())}
          type='button'
        >
            Buy
        </BuyBtn>
      </Fade>
    </CustomModal>
  )),
)
