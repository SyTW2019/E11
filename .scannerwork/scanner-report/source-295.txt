import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping-actions';

const initialState: Array<ShoppingItem> = [

  {

    id: '344343',
    name: 'prueba producto',

  }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action:
  ShoppingAction) {

    switch (action.type) {

      case ShoppingActionTypes.ADD_ITEM:
        return [...state, action.payload];

        default:

        return state;


    }


  }


