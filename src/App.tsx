import { Typography } from "./components/typography"

export default function App() {
  return (
    <>
      <Typography level='h1' className=''>
        Typography 1
      </Typography>
      <Typography level='h2' className=''>
        Typography 2
      </Typography>
      <Typography level='h3' className=''>
        Typography 3
      </Typography>
      <Typography level='h4' className=''>
        Typography 4
      </Typography>
      <Typography level='h5' className=''>
        Typography 5
      </Typography>
      <Typography level='h6' className=''>
        Typography 6
      </Typography>
      <Typography className='' size='lg'>
        Typography 6
      </Typography>
      <Typography className='' size='md'>
        Typography 6
      </Typography>
      <Typography className='' size='sm'>
        Typography 6
      </Typography>
      <Typography className=''>Typography 6</Typography>
    </>
  )
}
