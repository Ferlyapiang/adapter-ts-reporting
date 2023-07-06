import { Request, Response } from 'express';
import { ColorService } from '../../application/usecases/ColorService';

export class ColorController{

    private colorService: ColorService;

    constructor(){
        this.colorService = new ColorService();
    }

    public async getColor(req: Request, res: Response) : Promise<void> {

        const color = await this.colorService.getColors();

        if (color) {
            res.status(200).json(color);
        } else {
            res.status(404).json({ error: 'Color not found' });
        }
    }

}