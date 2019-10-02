import * as filter from './filter.actions';

const inicial: filter.filtrosValidos = 'Todo';

export function filtroReducer(state = inicial, action: filter.acciones ) {

  switch (action.type) {
    case filter.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  }

}
