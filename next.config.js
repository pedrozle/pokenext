/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
            },
            {
                protocol: "https",
                hostname: "assets.pokemon.com",
                port: "",
                pathname: "/assets/cms2/img/pokedex/full/**",
            },
        ],
    },
};

module.exports = nextConfig;
