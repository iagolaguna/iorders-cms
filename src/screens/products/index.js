import React, { PureComponent } from 'react'
import ProductsContainer from './products-container'
import ProductsList from './product-list'
import AppLayout from '../../components/layout'

class Products extends PureComponent {
  render() {
    return (
      <AppLayout>
        <ProductsContainer>
          {({ products }) => (
            <div>
              <ProductsList items={products} />
            </div>
          )}
        </ProductsContainer>
      </AppLayout>
    )
  }
}

export default Products
