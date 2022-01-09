import config from './secret.env.json'

export const dataConfig = config;
export function getUrl():string {
    if(process.env.NODE_ENV?.localeCompare("stage")){
        return "http://dummy.restapiexample.com"
    }
    else if(process.env.NODE_ENV?.localeCompare("test")){
        return "TEST ENV 2"
    }
    else if(process.env.NODE_ENV?.localeCompare("dev")){
        return " DEV ENV 3"
    }
    else {
        return "Invalid URL"
    }
}