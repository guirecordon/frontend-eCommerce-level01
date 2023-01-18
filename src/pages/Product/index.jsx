import {
  AddToCartBtn,
  ImgContainerMain,
  ImgContainerSmall,
  InvitesContainer,
  LeftSidePage,
  PriceTag,
  ProductContainer,
  ProductDescription,
  ProductInvites,
  ProductSpecs,
  QtyCounter,
  RightSideBottom,
  RightSidePage,
  RightSideTop,
  SignButtons,
} from './styles';

import side01 from '../../assets/Home/grid01.svg';
import side02 from '../../assets/Home/grid02.svg';
import { Heart, Scales, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { dollarFormatter } from '../../utils/formatter';

export function Product() {
  const { id } = useParams();

  const GET_PRODUCT = gql`
    query MyQuery {
      product(where: { id: "${id}" }) {
        id
        name
        price
        description
        images {
          url
        }
      }
    }
  `;

  const [img, setImg] = useState('');

  const { loading, error, data } = useQuery(GET_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  console.log(data);

  return (
    <ProductContainer>
      <LeftSidePage>
        <ImgContainerSmall>
          <img
            src={data.product.images[0].url}
            alt=""
            onClick={() => setImg(data.product.images[0].url)}
          />
          <img
            src={data.product.images[1].url}
            alt=""
            onClick={() => setImg(data.product.images[1].url)}
          />
        </ImgContainerSmall>

        <ImgContainerMain>
          {img ? (
            <img src={img} alt="" />
          ) : (
            <img src={data.product.images[0].url} alt="" />
          )}
        </ImgContainerMain>
      </LeftSidePage>

      <RightSidePage>
        <RightSideTop>
          <h3>{data.product.name}</h3>

          <PriceTag>
            {dollarFormatter.format(data.product.price / 100)}
          </PriceTag>

          <ProductDescription>{data.product.description}</ProductDescription>

          <QtyCounter>
            <SignButtons>-</SignButtons>1<SignButtons>+</SignButtons>
          </QtyCounter>

          <AddToCartBtn>
            <ShoppingCart size={16} />
            Add to cart
          </AddToCartBtn>

          <InvitesContainer>
            <ProductInvites>
              <Heart size={16} />
              Add to wish list
            </ProductInvites>
            <ProductInvites>
              <Scales size={16} />
              Add to compare
            </ProductInvites>
          </InvitesContainer>

          <ProductSpecs>
            <p>Vendor: Polo</p>
            <p>Product type: t-shirt</p>
            <p>Tag: T-Shirt, Women, Top</p>
          </ProductSpecs>
        </RightSideTop>

        <RightSideBottom>
          <h6>Description</h6>
          <h6>Additional information</h6>
          <h6>FAQ</h6>
        </RightSideBottom>
      </RightSidePage>
    </ProductContainer>
  );
}
