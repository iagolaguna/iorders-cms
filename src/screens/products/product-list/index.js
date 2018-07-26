import React from 'react'
import { Table } from 'antd'
import propTypes from 'prop-types'

const columns = [
  { title: 'Id', dataIndex: 'id' },
  { title: 'Descrição', dataIndex: 'description' },
  { title: 'Preço', dataIndex: 'price' }
]
const ProductsList = ({ items }) => (
  <Table dataSource={items} rowKey="id" columns={columns} />
)

ProductsList.propTypes = {
  items: propTypes.array
}

export default ProductsList
