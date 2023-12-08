import ShoppingListItem from "../models/ShoppingListItem";

export function getNextId(items: ShoppingListItem[]){
    return items.length > 0 ? items[items.length - 1]?.id + 1 : 1
}