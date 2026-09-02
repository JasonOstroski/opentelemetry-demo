// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import * as S from '../../styles/Cart.styled';
import CartDetail from '../../components/Cart/CartDetail';
import EmptyCart from '../../components/Cart/EmptyCart';
import { useCart } from '../../providers/Cart.provider';

const Cart: NextPage = () => {
  const {
    cart: { items },
  } = useCart();

  return (
      <Head>
        <title>Otel Demo - Cart</title>
      </Head>
      <Layout>
        <S.Cart>
          {(!!items.length && <CartDetail />) || <EmptyCart />}
        </S.Cart>
      </Layout>
  );
};

export default Cart;
