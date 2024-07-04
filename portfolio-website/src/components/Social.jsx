import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/ardagediz" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/arda-g/" },
];

const Social = ({ containerStyles = "flex space-x-4", iconStyles = "text-4xl text-gray-800" }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;

