import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Header,
  Image,
  Menu,
} from 'semantic-ui-react'
import Logo from '../../static/cropped-cropped-new-logo-03-01-3.png'

export default function PageHeader(props) {
  return (
    <Menu  >
      <Container>
        <Menu.Item as='a' header>
          <Link to="/">
            <Image size='small' src={Logo}
              style={{ marginRight: '1.5em' }} />
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Link to="/work">
            <Menu.Item as='a' >
              <Header as='h2'>
                <Header.Content>
                  Projects
      </Header.Content>
              </Header>
            </Menu.Item>
          </Link>
          <Menu.Item as='a'>
            <Header as='h3'>
              <Link to="/info">
                <Header.Content>
                  Info
      </Header.Content>
              </Link>
            </Header>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
