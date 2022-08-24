import { Box, Heading, Image } from "@chakra-ui/react";

import LogoBgWhite from '../../../public/assets/logo-bg-white.png'

export default function Header() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
            background="darkGreen"
        >
            <img src={LogoBgWhite.src} />
        </Box>
    )
}