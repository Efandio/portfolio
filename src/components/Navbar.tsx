import { Button } from "./ui/button";

type clickType = 'aboutMe' | 'techStack' | 'portfolio' | 'contact' | '' ;

interface NavbarProps {
    className?: string;
    link?: string;
    handleClick?: (tp: clickType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ className, link, handleClick }) => {

    return (
        <nav className={`${className} flex w-full `}>
            <div className="flex items-center justify-between lg:justify-evenly w-full lg:px-60">
                <Button onClick={() => handleClick && handleClick('aboutMe')} className="hover:bg-gray-700 text-xs"><a className="text-xs" href={link}>About Me</a></Button>
                <Button onClick={() => handleClick && handleClick('techStack')} className="hover:bg-gray-700 text-xs"><a className="text-xs" href={link}>Tech Stack</a></Button>
                <Button onClick={() => handleClick && handleClick('portfolio')} className="hover:bg-gray-700 text-xs"><a className="text-xs" href={link}>Portfolio</a></Button>
                <Button onClick={() => handleClick && handleClick('contact')} className="hover:bg-gray-700 text-xs"><a className="text-xs" href={link}>Contact</a></Button>
            </div>
        </nav>
    )
};

export default Navbar;