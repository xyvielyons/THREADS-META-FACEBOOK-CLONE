const nextConfig = {
    typescript:{
        ignoreBuildErrors:true
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'img.clerk.com'
            },
            {
                protocol:'https',
                hostname:'utfs.io'
            },
        ]
    }
};

module.exports =  nextConfig;
