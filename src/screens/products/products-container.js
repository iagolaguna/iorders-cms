import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import propTypes from 'prop-types'

const MARKETS_QUERY = gql`
  {
    products {
      description
      id
      price
    }
  }
`

const ProductsContainer = ({ children }) => (
  <Query query={MARKETS_QUERY}>
    {({ loading, error, data: { products } }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      return children({ products, loading, error })
    }}
  </Query>
)

ProductsContainer.propTypes = {
  children: propTypes.func
}

export default ProductsContainer
