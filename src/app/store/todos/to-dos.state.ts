import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ToDo} from '../../shared/models/to-do.model';

export const toDosAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>({
    selectId: (model: ToDo) => model.id
});

export interface AllToDosState extends EntityState<ToDo> {
    loading: boolean;
    loaded: boolean;
    error: any | null;
}
