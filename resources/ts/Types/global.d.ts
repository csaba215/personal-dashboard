import { AxiosInstance } from 'axios';
declare global {
    interface Window {
        axios: AxiosInstance;
    }

    let route: typeof ziggyRoute;
    let Ziggy: ZiggyConfig;
}
