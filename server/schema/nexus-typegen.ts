/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../api/context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  EmoteCreateInput: { // input type
    count?: number | null; // Int
    gif?: string | null; // String
    name: string; // String!
  }
  EmoteUpdateInput: { // input type
    count?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    gif?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  EmoteWhereUniqueInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
  }
  IntFieldUpdateOperationsInput: { // input type
    decrement?: number | null; // Int
    divide?: number | null; // Int
    increment?: number | null; // Int
    multiply?: number | null; // Int
    set?: number | null; // Int
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Emote: { // root type
    count: number; // Int!
    gif: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Emote: { // field return type
    count: number; // Int!
    gif: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  Mutation: { // field return type
    createOneEmote: NexusGenRootTypes['Emote']; // Emote!
    deleteOneEmote: NexusGenRootTypes['Emote'] | null; // Emote
    incrementOneEmote: NexusGenRootTypes['Emote'] | null; // Emote
    updateOneEmote: NexusGenRootTypes['Emote'] | null; // Emote
  }
  Query: { // field return type
    emote: NexusGenRootTypes['Emote'] | null; // Emote
    emotes: NexusGenRootTypes['Emote'][]; // [Emote!]!
  }
}

export interface NexusGenFieldTypeNames {
  Emote: { // field return type name
    count: 'Int'
    gif: 'String'
    id: 'Int'
    name: 'String'
  }
  Mutation: { // field return type name
    createOneEmote: 'Emote'
    deleteOneEmote: 'Emote'
    incrementOneEmote: 'Emote'
    updateOneEmote: 'Emote'
  }
  Query: { // field return type name
    emote: 'Emote'
    emotes: 'Emote'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneEmote: { // args
      data: NexusGenInputs['EmoteCreateInput']; // EmoteCreateInput!
    }
    deleteOneEmote: { // args
      where: NexusGenInputs['EmoteWhereUniqueInput']; // EmoteWhereUniqueInput!
    }
    incrementOneEmote: { // args
      gif: string; // String!
      name: string; // String!
    }
    updateOneEmote: { // args
      data: NexusGenInputs['EmoteUpdateInput']; // EmoteUpdateInput!
      where: NexusGenInputs['EmoteWhereUniqueInput']; // EmoteWhereUniqueInput!
    }
  }
  Query: {
    emote: { // args
      where: NexusGenInputs['EmoteWhereUniqueInput']; // EmoteWhereUniqueInput!
    }
    emotes: { // args
      after?: NexusGenInputs['EmoteWhereUniqueInput'] | null; // EmoteWhereUniqueInput
      before?: NexusGenInputs['EmoteWhereUniqueInput'] | null; // EmoteWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}