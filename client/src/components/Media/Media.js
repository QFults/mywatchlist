import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

const Media = props => {
  const classes = useStyles()
  const {
    media,
    saved,
    handleBtnClick
  } = props

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={media.poster}
        title={media.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {media.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Year: {media.year}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Type: {media.type}
        </Typography>
      </CardContent>
      <CardActions>
        {
          saved ? (
            <Button
              size="small"
              color="secondary"
              onClick={() => handleBtnClick(media._id)}>
              Delete
            </Button>
          ) : (
              <Button
                size="small"
                color="primary"
                onClick={() => handleBtnClick(media.imdbID)}>
                Save
              </Button>
            )
        }

      </CardActions>
    </Card >
  )
}

export default Media
