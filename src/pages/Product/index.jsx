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

const displayImgs = [
  {
    id: 0,
    img: side01,
  },
  {
    id: 1,
    img: side02,
  },
];

export function Product() {
  const [img, setImg] = useState(side01);

  return (
    <ProductContainer>
      <LeftSidePage>
        <ImgContainerSmall>
          <img src={side01} alt="" onClick={() => setImg(side01)} />
          <img src={side02} alt="" onClick={() => setImg(side02)} />
        </ImgContainerSmall>

        <ImgContainerMain>
          <img src={img} alt="" />
        </ImgContainerMain>
      </LeftSidePage>

      <RightSidePage>
        <RightSideTop>
          <h3>Long Sleeve Graphic T-shirt</h3>

          <PriceTag>$ 19.99</PriceTag>

          <ProductDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            aliquam, culpa deserunt ab at explicabo voluptates, commodi nesciunt
            optio doloremque in maiores facilis eligendi, aliquid porro alias
            debitis illum nam.
          </ProductDescription>

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
