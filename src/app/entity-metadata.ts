import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  ToDo: {}
};

const pluralNames = {
  ToDo: 'ToDos'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
