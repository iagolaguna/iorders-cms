import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

const StyledLogo = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  .name {
    font-weight: bold;
    margin-left: 10px;
    color: white;
    font-size: 20px;
  }
`

const Logo = () => (
  <StyledLogo>
    <Icon type="shop" style={{ color: 'white', fontSize: 26 }} />
    <span className="name">
      <i>i</i>Orders
    </span>
  </StyledLogo>
)

export default Logo
