import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

import Logo from './logo'

const { Sider } = Layout

const menuItems = [
  { icon: 'shopping-cart', label: 'Produtos', link: '/products' },
  { icon: 'shopping-cart', label: 'Mercados', link: '/products' }
]

const Sidebar = () => (
  <Sider>
    <Logo />
    <Menu theme="dark" mode="inline">
      {menuItems.map(({ label, icon, link }, index) => (
        <Menu.Item key={index}>
          <Icon type={icon} />
          <NavLink to={link}>
            <span style={{ color: 'white' }}>{label}</span>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
)

export default Sidebar
