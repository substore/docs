import Image from 'next/image';

export default {
 footer: true,
 search: true,
 titleSuffix: ' - Substore docs',
 link: 'https://github.com/substore',
 footerText: function FooterText() {
    return <>{new Date().getFullYear()} © Substore.</>;
 },
 logo: function Logo() {
        return <Image width={100} height={50} alt="Substore logo" src="https://cdn.nijmeh.cloud/blue-green-icon.png" />;
 },
}

