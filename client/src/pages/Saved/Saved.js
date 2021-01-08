import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import MediaAPI from '../../utils/MediaAPI'
import Media from '../../components/Media'

const {
  getSavedMedia,
  deleteMedia
} = MediaAPI

const Saved = () => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  const handleDeleteSaved = id => {
    deleteMedia(id)
      .then(() => {
        const saved = savedState.saved.filter(media => media._id !== id)
        setSavedState({ ...savedState, saved })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getSavedMedia()
      .then(({ data: saved }) => {
        setSavedState({ ...savedState, saved })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <hr />
      <Typography variant="h6">
        Your Saved Media
      </Typography>
      {
        savedState.saved.length ? (
          savedState.saved.map(media => (
            <Media
              key={media._id}
              media={media}
              saved={true}
              handleBtnClick={handleDeleteSaved} />
          ))
        ) : null
      }
    </>
  )
}

export default Saved
