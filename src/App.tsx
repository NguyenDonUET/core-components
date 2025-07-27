import { Typography } from "./components/typography"

export default function App() {
  return (
    <>
      <Typography variant='h1'>Main Title</Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6' color={"error"}>
        Heading 6
      </Typography>
      <Typography variant='h2' color='primary'>
        Section Title
      </Typography>
      <Typography variant='body' size='lg' weight='medium'>
        Large medium-weight body text
      </Typography>
      <Typography variant='body' as='div' color='error'>
        Body text in div element
      </Typography>
      <Typography variant='caption' color='secondary'>
        Image caption
      </Typography>
      <Typography variant='overline' color='error'>
        Section Label
      </Typography>
    </>
  )
}
