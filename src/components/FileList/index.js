import React from 'react'
import PropType from 'prop-types'
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'
import { Container, FileInfo, Preview } from './styles'

function FileList({ files, onDelete }) {
  return (
    <Container>
      {files.map(uploadedFile => {
        return (
          <li key={uploadedFile.id}>
            <FileInfo>
              <Preview src={uploadedFile.preview} />
              <div>
                <strong>{uploadedFile.name}</strong>
                <span>
                  {uploadedFile.readableSize}
                  {!!uploadedFile.url && (
                    <button
                      type="button"
                      onClick={() => onDelete(uploadedFile.id)}
                    >
                      Excluir
                    </button>
                  )}
                </span>
              </div>
            </FileInfo>
            <div>
              {!uploadedFile.uploaded && !uploadedFile.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 24 },
                    path: { stroke: '#7159c1' },
                  }}
                  strokeWidth={10}
                  percentage={uploadedFile.progress}
                />
              )}

              {uploadedFile.url && (
                <a
                  href={uploadedFile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                </a>
              )}

              {uploadedFile.uploaded && (
                <MdCheckCircle size={24} color="#78e5d5" />
              )}
              {uploadedFile.error && <MdError size={24} color="#e57878" />}
            </div>
          </li>
        )
      })}
    </Container>
  )
}

FileList.propTypes = {
  files: PropType.arrayOf(PropType.shape({})).isRequired,
  onDelete: PropType.func.isRequired,
}

export default FileList
