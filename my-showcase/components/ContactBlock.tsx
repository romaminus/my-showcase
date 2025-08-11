import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ContactsBlock() {
    return (
        <div className="space-y-2 text-orange-600">
            <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-800" />
                Varna, Bulgaria — Open to remote and relocation
            </p>
            <p className="flex items-center gap-2">
                <FaEnvelope className="text-orange-800" />
                <a href="mailto:romaminus19@gmail.com" className="hover:underline">romaminus19@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
                <FaPhone className="text-orange-800" />
                <a href="tel:+359878019010" className="hover:underline">+359 878 019 010</a>
            </p>
            <p className="flex items-center gap-2">
                <FaTelegramPlane className="text-orange-800" />
                <Link href="https://t.me/sofa_nerd" className="hover:underline">
                    @sofa_nerd
                </Link>
            </p>
            <p className="flex items-center gap-2">
                <FaLinkedin className="text-orange-800" />
                <Link
                    href="https://www.linkedin.com/in/roman-belov-36268a214/"
                    target="_blank"
                    className="hover:underline"
                >
                    Profile
                </Link>
            </p>
            <p className="flex items-center gap-2">
                <FaGithub className="text-orange-800" />
                <Link
                    href="https://github.com/romaminus/"
                    target="_blank"
                    className="hover:underline"
                >
                    Repository
                </Link>
            </p>
        </div>
    );
}
