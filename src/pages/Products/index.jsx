import {
  AsideBar,
  Header,
  ImagesContainer,
  ProductsContainer,
  RightSide,
} from './styles';
import { FeaturedCard } from '../../components/Featured/components/FeaturedCards';

import cover from '../../assets/Products/cover.svg';

import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// const cards = [
//   {
//     id: 0,
//     img: featured01,
//   },
//   {
//     id: 1,
//     img: featured01,
//   },
//   {
//     id: 2,
//     img: featured01,
//   },
//   {
//     id: 3,
//     img: featured01,
//   },
// ];

// const GET_PRODUCTS = gql`
//   query MyQuery {
//     products {
//       id
//       name
//       price
//       categories {
//         id
//         name
//       }
//       images {
//         url
//       }
//     }
//   }
// `;

export function Products() {
  const params = useParams();
  const [displayProducts, setDisplayProducts] = useState([]);
  const [maxPriceRange, setMaxPriceRange] = useState(150);
  const [brandNewPage, setBrandNewPage] = useState(true);
  const [orderBy, setOrderBy] = useState('price_DESC');

  const GET_CATEGORIES = gql`
  query MyQuery {
    categories {
      id
      name
      products(orderBy: ${orderBy}) {
        id
        name
        price
        images {
          url
        }
        categories {
          id
        }
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    variables: { orderBy },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  const allProducts = data.categories.reduce((acc, currItem) => {
    return [...acc, ...currItem.products];
  }, []);

  function getInitialPage() {
    const initialPage = allProducts.filter((product) => {
      const categoryArr = product.categories.map((category) => category.id);
      return categoryArr.includes(params.id);
    });

    setDisplayProducts(initialPage);
  }

  if (brandNewPage && displayProducts.length === 0) {
    getInitialPage();
    setBrandNewPage(false);
  }

  function handleChange(e) {
    if (e.target.checked === true) {
      const filteredProducts = allProducts.filter((product) => {
        const categoryArr = product.categories.map((category) => category.id);

        return categoryArr.includes(e.target.value);
      });

      setDisplayProducts([...displayProducts, ...filteredProducts]);
    } else if (e.target.checked === false) {
      const productsToRemove = allProducts.filter((product) => {
        const categoriesToRemove = product.categories.map(
          (category) => category.id,
        );

        return categoriesToRemove.includes(e.target.value);
      });

      const updatedProducts = displayProducts.filter((product) => {
        const removeArray = productsToRemove.map((removable) => {
          return removable.id;
        });

        return !removeArray.includes(product.id);
      });

      setDisplayProducts(updatedProducts);
    }
  }

  function onPriceRangeChange({ target }) {
    setMaxPriceRange(target.value);

    console.log(maxPriceRange);

    const filteredList = allProducts.filter(
      (product) => product.price / 100 < maxPriceRange,
    );

    console.log(filteredList);

    setDisplayProducts(filteredList);
  }

  function handleLowerFirst() {
    setOrderBy('price_ASC');
  }

  function handleHigherFirst() {
    setOrderBy('price_DESC');
  }

  return (
    <ProductsContainer>
      <AsideBar>
        <fieldset>
          <legend>Product Categories</legend>

          {data.categories.map((category) => {
            return (
              <div key={category.id}>
                <input
                  type="checkbox"
                  name="category"
                  id={category.id}
                  value={category.id}
                  onChange={handleChange}
                />
                <label htmlFor={category.id}>{category.name}</label>
              </div>
            );
          })}
        </fieldset>

        <fieldset>
          <legend>Filter by price</legend>
          <span>0</span>
          <input type="range" min={0} max={150} onChange={onPriceRangeChange} />
          {maxPriceRange > 145 ? (
            <span>{maxPriceRange}+</span>
          ) : (
            <span>{maxPriceRange}</span>
          )}
        </fieldset>

        <fieldset>
          <legend>Sort by</legend>
          <div onClick={handleLowerFirst}>
            <input
              type="radio"
              id="lowest"
              name="price"
              value="lowest"
              checked
            />
            <label htmlFor="lowest">Price (lowest first)</label>
          </div>

          <div onClick={handleHigherFirst}>
            <input type="radio" id="highest" name="price" />
            <label htmlFor="highest">Price (highest first)</label>
          </div>
        </fieldset>
      </AsideBar>

      <RightSide>
        <Header>
          <img src={cover} alt="" />
        </Header>

        <ImagesContainer>
          {displayProducts.map((product) => (
            <FeaturedCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0].url}
            />
          ))}
        </ImagesContainer>
      </RightSide>
    </ProductsContainer>
  );
}
