import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import bg from '../../public/assets/bg-gray.jpeg'
import Link from 'next/link'

const Home: NextPage = () => {
  const whatsapplink = 'https://api.whatsapp.com/send?phone=5562981858307&text=Ol%C3%A1!%20Quero%20pegar%20meu%20desconto%20da%20consultoria!'

  function handleIWant() {
    window.open(whatsapplink, '_blank')
  }

  return (
    <>
      <Header />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        id='banner-section'
      >
        <Heading
          color="darkGreen"
          fontWeight="900"
          maxWidth="65%"
          marginTop="5rem"
          size="3xl"
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

        <Link href="#price-section" scroll={true}>
          <button id='btn-i-want'>
            EU QUERO!
          </button>
        </Link>
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
            fontFamily="All Nevrada"
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

      <Flex
        id='price-section'
      >
        <Flex
          className='price-container price-container-info'
          style={{
            justifyContent: 'center',
            gap: '5%'
          }}
        >
          <Heading
            color="darkGreen"
            fontWeight="900"
            size="2xl"
            fontFamily="All Nevrada"
            id='investimento-title'
          >
            INVESTIMENTO
          </Heading>

          <Flex
            flexDirection="column"
            gap="1.5rem"
          >
            <Heading
              size="lg"
              textAlign="center"
            >
              O que você recebe:
            </Heading>

            <Flex
              flexDirection="column"
              textAlign="center"
              fontSize="1.2rem"
              fontWeight="500"
            >
              <Text>2 Encontros (presenciais ou online) +</Text>
              <Text>Análise de perfil +</Text>
              <Text>1 mês de acompanhamento +</Text>
              <Text>Template de plano de ação</Text>
              <Text>Tabela de planejamento +</Text>
              <Text>Análise SWOT +</Text>
              <Text>Calendário de Stories +</Text>
              <Text>Tabela de datas comemorativas +</Text>
              <Text>Planilha de ideias para o seu nicho +</Text>
              <Text>Trello para esquematização +</Text>
              <Text>Estratégia de crescimento personalizada .</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          className='price-container price-container-price'
          justifyContent="flex-start"
        >
          <Flex
            gap="1rem"
            flexDirection="column"
            marginTop="2rem"
            alignItems="center"
          >
            <Heading
              fontFamily="All Nevrada"
              textTransform="uppercase"
              className='text-up'
              color="#2d2d2d"
            >
              60% de desconto!
            </Heading>

            <Heading
              fontFamily="All Nevrada"
              textTransform="uppercase"
              className='text-up'
              color="#2d2d2d"
            >
              DE: <span className="color-red-background">R$ 1.129,90</span>
            </Heading>
          </Flex>

          <Flex
            marginTop="5rem"
            color="darkGreen"
            textTransform="uppercase"
            flexDirection="column"
            alignItems="center"
            id='valor-container'
          >
            <Heading
              fontFamily="All Nevrada"
              className='desconto-title'
            >
              Por apenas:
            </Heading>

            <Heading
              fontFamily="All Nevrada"
              className='desconto-title'
            >
              2x de:
            </Heading>

            <Heading
              fontFamily="Montserrat"
              color="#fff"
              backgroundColor="#00812f"
              display="flex"
              justifyContent="center"
              padding="0.5rem"
              borderRadius="10px"
              size="3xl"
              className='desconto-valor'
            >
              R$ 249,90
            </Heading>
          </Flex>

          <Flex
            flexDirection="column"
            marginTop="3rem"
            alignItems="center"
          >
            <Heading
              fontFamily="All Nevrada"
              size="md"
              className='desconto-text-info'
              color="#2d2d2d"
            >
              ou à vista com 10% de DESCONTO:
            </Heading>

            <Heading
              fontFamily="All Nevrada"
              size="md"
              className='desconto-text-info'
              color="#2d2d2d"
            >
              Pagamento único de 449,90
            </Heading>
          </Flex>

          <Flex
            marginTop="1rem"
            alignItems="center"
            justify="center"
            textAlign="center"
          >
            <Text
              fontSize="0.7rem"
            >
              * valores válidos até o dia 10/09/2022
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        width="100%"
        justifyContent="center"
      >
        <button
          id='btn-i-want-wpp'
          onClick={() => handleIWant()}
        >
          EU QUERO!
        </button>
      </Flex>
    </>
  )
}

export default Home
