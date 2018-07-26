import React from 'react'
import { Layout } from 'antd'
import propTypes from 'prop-types'

import Sidebar from '../sidebar/sidebar'

const { Header, Content } = Layout

const AppLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sidebar />
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content>{children}</Content>
    </Layout>
  </Layout>
)

AppLayout.propTypes = {
  children: propTypes.func
}

export default AppLayout
