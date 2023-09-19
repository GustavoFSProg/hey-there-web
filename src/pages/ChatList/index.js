import React from 'react'
import Row from 'components/Row'
import Column from 'components/Column'
import Typography from 'components/Typography'
import Avatar from 'components/Avatar'
import { chatList } from 'mocks/chatList'
import { StyledNumber } from './styles'

function ChatList() {
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    alert('You clicked me!!!')
  }

  return (
    <Row>
      {chatList.map(user => {
        return (
          <Row
            key={user.name}
            backgroundColor="primary"
            radius="8px"
            alignItems="center"
            margin="2px"
            onClick={handleClick}
          >
            <Column size={12} margin="8px 2%">
              <Column size={1}>
                <Avatar src={user.avatar} />
              </Column>

              <Column size={9} alignItems="left" direction="column">
                <Typography size="md" weight="bold">
                  {user.name}
                </Typography>
                <Typography color="secondary">{user.msgPreview}</Typography>
              </Column>

              <Column size={2} direction="column">
                <Typography
                  size="sm"
                  weight={user.newMessages !== '0' ? 'bold' : 'regular'}
                  color={user.newMessages !== '0' ? '#32a852' : 'grey'}
                >
                  {user.time}
                </Typography>

                {user.newMessages !== '0' ? (
                  <StyledNumber>
                    <Typography size="sm" weight="black">
                      {user.newMessages}
                    </Typography>
                  </StyledNumber>
                ) : null}
              </Column>
            </Column>
          </Row>
        )
      })}
    </Row>
  )
}

export default ChatList
