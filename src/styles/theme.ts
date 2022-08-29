import { extendTheme } from '@chakra-ui/react'

const colors = {
    darkGreen: '#1C4A47'
}

export const theme = extendTheme({ 
    colors,
    fonts:{
        heading: 'Inter', 
        body: 'Roboto'
    }
 })