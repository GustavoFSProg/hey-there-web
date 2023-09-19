import React, { useState, useEffect } from 'react'
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import api from 'api'
import Upload from 'components/Upload'
import FileList from 'components/FileList'
import Row from 'components/Row'
import Column from 'components/Column'
import Avatar from 'components/Avatar'
import { profile } from 'mocks/profile'
import Typography from 'components/Typography'
import { Container, Content } from './styles'

function Profile() {
  const [uploadedFiles, setUploadedFiles] = useState([])

  const updateStates = async () => {
    const response = await api.get('/images')
    setUploadedFiles(
      response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url,
      }))
    )
  }

  const updateFile = (id, data) => {
    setUploadedFiles(
      uploadedFiles.map(file => {
        return id === file.id ? { ...file, ...data } : file
      })
    )
  }

  const processUpload = uploadedFile => {
    const data = new FormData()

    data.append('file', uploadedFile.file, uploadedFile.name)

    api
      .post('/upload-image', data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total))

          updateFile(uploadedFile.id, {
            progress,
          })
        },
      })
      .then(response => {
        updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        })
      })
      .catch(() => {
        updateFile(uploadedFile.id, {
          error: true,
        })
      })
  }

  const handleUpload = files => {
    const currentFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    setUploadedFiles(uploadedFiles.concat(currentFiles))
    currentFiles.forEach(processUpload)
  }

  const handleDelete = async id => {
    await api.delete(`/images/${id}`)
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id))
  }

  useEffect(() => {
    updateStates()
  }, [])

  return (
    <Row>
      <Column
        margin="12px"
        size={12}
        justifyContent="center"
        background="#5A4E61"
      >
        <Column margin="90px" size={12} justifyContent="center">
          <Avatar size="120px" src={profile.avatarImg} border="green" />
        </Column>
        <Container>
          <Content>
            <Upload onUpload={handleUpload} />
            {!!uploadedFiles.length && (
              <FileList files={uploadedFiles} onDelete={handleDelete} />
            )}
          </Content>
        </Container>
        <Column
          margin="10px"
          size={12}
          justifyContent="center"
          background="#302934"
        >
          <Typography>{`Nome: ${profile.name}`}</Typography>
          <Typography>{`Email: ${profile.email}`}</Typography>

          <Typography>{`Status: ${profile.statusMessage}`}</Typography>
        </Column>
      </Column>
    </Row>
  )
}

export default Profile
