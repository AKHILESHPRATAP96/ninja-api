import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateNinjaDto } from './dto/create-ninjas.dto';

@Controller('ninjas')
export class NinjasController {
    @Get()
    getninja():string{
        return "This is the ninjas controller"
    }

    @Post("add")
    addninja(@Body() createN:CreateNinjaDto):string{
        return `adding new ninja ${createN.name}`
    }
    @Get(':id')
    getninjsbyID(@Param('id') id:string){
        return `geting ninja by id- ${id}`;
    }
}
