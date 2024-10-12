interface ApiEndpoint {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch'; 
}

interface ApiConfig {
    signUp: ApiEndpoint;
}

const backendDomain = 'http://localhost:8080'

const SummaryApi: ApiConfig = {
    signUp:{
        url: `${backendDomain}/api/signup`,
        method: "post"
    }
}

export default SummaryApi