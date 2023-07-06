import { Color } from "../../domain/models/Color";
import { ColorApi } from "../../infrastructure/external/api/ColorApi";
import { GenericResponse } from "../responses/GenericResponse";

export class ColorService{

    private colorApi: ColorApi;

    constructor(){
        this.colorApi = new ColorApi();
    }

    public async getColors() : Promise<GenericResponse<Color[]>>{
        try {
            const result = await this.colorApi.getColor();

            const transformedData: Color[] = result.data.map((sourceItem: { id: any; name: any; year: any; color: any; pantone_value: any; }) => {
                
                const destinationItem: Color = {
                    id: sourceItem.id,
                    name: sourceItem.name,
                    year: sourceItem.year,
                    color: sourceItem.color,
                    pantoneValue: sourceItem.pantone_value
                };
                
                    return destinationItem;
                });


            return{
                success: true,
                message: 'Success to get colors.',
                data: transformedData
            }
        } catch (error) {
            return {
                success: false,
                message: 'Failed to get colors.',
            };
        }
    }

}