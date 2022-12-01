import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grow from '@mui/material/Grow'

export default function BasicCard({ children, timeout }) {
  return (
    <Grow in={true} timeout={timeout}>
      <Card sx={{ maxWidth: '400px', margin: '15px' }}>
        <CardContent>{children}</CardContent>
      </Card>
    </Grow>
  )
}
