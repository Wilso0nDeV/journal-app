// import { useState } from 'react'
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';

export const JournalApp = () => {
  // const [count, setCount] = useState(0)

  return (
    <AppTheme>
     <AppRouter />
    </AppTheme>
  )
}

