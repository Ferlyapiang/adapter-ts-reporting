import { network } from '../../config/AxiosConfig';
export class ColorApi{

    async getColor(){
        const response = await network({
            url: 'api/unknown',
            data: {},  
        });
        return response.data
    }
    
}