import React from 'react'
import PropType from 'prop-types'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'

function Upload(props) {
  const { onUpload } = props

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag files here ...</UploadMessage>
    }
    if (isDragReject) {
      return <UploadMessage type="error">Unsupported file</UploadMessage>
    }
    return <UploadMessage type="success">Drop files here</UploadMessage>
  }

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  )
}

Upload.propTypes = {
  onUpload: PropType.func.isRequired,
}

export default Upload
