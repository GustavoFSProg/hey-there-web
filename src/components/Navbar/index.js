import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropType from 'prop-types'
import { useStore } from 'core/store'
import Select from 'components/Select'
import { clearItems } from 'helpers'
import DropdownMenu from 'components/DropdownMenu'
import { Wrapper, Content, StyledBrand, StyledLink } from './styles'

function Navbar(props) {
  const { backgroundColor, brand, select, dropdown } = props
  const [links, setLinks] = useState([])
  const { store, setStore } = useStore()
  const { push } = useHistory()

  const handleLinks = () => {
    if (store.token) {
      setLinks(
        links.concat([
          { name: 'CHATS', path: '/chat' },
          { name: 'NEW CONTACT', path: '/new-contact' },
          { name: 'PROFILE', path: '/profile' },
        ])
      )
      return links
    }
    setLinks(
      links.concat([
        { name: 'LOGIN', path: '/login' },
        { name: 'JOIN', path: '/register' },
      ])
    )
    return links
  }

  const handleOption = e => {
    const { value } = e.target
    push(value)
  }

  const logOut = () => {
    clearItems()
    setStore(null)
    push('/')
    window.location.reload()
  }

  useEffect(() => {
    handleLinks()
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Content>
        {brand && <StyledBrand onClick={() => push('/')}>{brand}</StyledBrand>}

        {links &&
          links.map((link, index) => {
            return (
              <StyledLink key={index} onClick={() => push(link.path)}>
                {link.name}
              </StyledLink>
            )
          })}
        {store.token && <StyledLink onClick={logOut}>LOGOUT</StyledLink>}
        {dropdown && (
          <DropdownMenu
            width="150px"
            title={dropdown.title}
            options={dropdown.options}
            onSelectOption={handleOption}
          />
        )}

        {select && (
          <Select
            width="150px"
            name="navbar"
            options={select.options}
            onChange={handleOption}
            placeholder={select.placeholder}
          />
        )}
      </Content>
    </Wrapper>
  )
}

Navbar.propTypes = {
  backgroundColor: PropType.string,
  brand: PropType.string,

  select: PropType.shape({
    placeholder: PropType.string,
    options: PropType.arrayOf(
      PropType.shape({
        label: PropType.string,
        value: PropType.string,
      })
    ),
  }),
  dropdown: PropType.shape({
    title: PropType.string,
    options: PropType.arrayOf(
      PropType.shape({
        name: PropType.string,
        action: PropType.string,
      })
    ),
  }),
}

Navbar.defaultProps = {
  backgroundColor: undefined,
  brand: undefined,
  dropdown: undefined,
  select: undefined,
}

export default Navbar
