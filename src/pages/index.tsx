import { Box, Button, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Heading
          color="darkGreen"
          fontWeight="900"
          maxWidth="65%"
          marginTop="5rem"
          size="4xl"
          id='title'
          fontFamily="All Nevrada"
        >
          Uma consultoria focada em te ajudar a expressar o seu conteúdo para inspirar outras pessoas!
        </Heading>

        <h1 className="subtitle">
          Acreditamos que todo produtor de conteúdo tem algo para inspirar e ensinar através do seu conhecimento. E com essa consultoria, queremos te impulsionar e ensinar como planejar e produzir conteúdo de forma mais direcionada.
          <br />
          Por isso, desenvolvemos um método de diagnóstico dos problemas da sua marca para te impulsionar no seu conteúdo;
        </h1>

        <button id='btn-i-want'>Eu quero!</button>
      </Box>

      <Box
        className='for-who-section'
        backgroundColor="rgb(233, 232, 232)"
        marginTop="5rem"
        width="100%"
      >
        <Box
          className='for-who-container'
          style={{
            justifyContent: 'center'
          }}
        >
          <Heading
            color="darkGreen"
            // maxWidth="70%"
            textAlign="center"
            fontSize="3rem"
            id='for-who-title'
            fontFamily="Montserrat"
          >
            Para quem é a Consultoria DC?
          </Heading>
        </Box>

        <Box
          className='for-who-container'
          gap="2rem"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="1rem"
          >
            <Heading
              className='number-for-who'
              backgroundColor="darkGreen"
              id='number-1'
            >
              1
            </Heading>

            <h1 className='for-who-text'>Para produtores de conteúdo que querem se destacar;</h1>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="1rem"
            
          >
            <Heading
              className='number-for-who'
              backgroundColor="darkGreen"
              id='number-2'
            >
              2
            </Heading>

            <h1 className='for-who-text'>Para produtores de conteúdo que querem se destacar;</h1>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="1rem"
          >
            <Heading
              className='number-for-who'
              backgroundColor="darkGreen"
              id='number-3'
            >
              3
            </Heading>

            <h1 className='for-who-text'>Para produtores de conteúdo que querem se destacar;</h1>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="1rem"
          >
            <Heading
              className='number-for-who'
              backgroundColor="darkGreen"
              id='number-4'
            >
              4
            </Heading>

            <h1 className='for-who-text'>Para produtores de conteúdo que querem se destacar;</h1>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
