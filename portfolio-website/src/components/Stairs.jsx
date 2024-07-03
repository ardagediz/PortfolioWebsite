import { motion } from 'framer-motion';

const stairsAnimation = {
    intial:{
        top: "0%",
    },
    amiamte:{
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

const Stairs = () => {
    return (
        <div>stairs</div>
    )
}
export default Stairs;