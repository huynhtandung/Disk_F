import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Item')
export class ItemResolver {
    itemsData = [
        { id: 0, name: 'Laptop'}
    ]

    @Query('items')
    getItems(){
        return this.itemsData;
    }
}
