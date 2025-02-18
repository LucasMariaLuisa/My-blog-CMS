import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentFoto extends Struct.ComponentSchema {
  collectionName: 'components_component_fotos';
  info: {
    displayName: 'foto';
    icon: 'monitor';
  };
  attributes: {
    foto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    legenda: Schema.Attribute.String;
  };
}

export interface SectionsCarrosselFotos extends Struct.ComponentSchema {
  collectionName: 'components_sections_carrossel_fotos';
  info: {
    description: '';
    displayName: 'Carrossel-fotos';
    icon: 'chartBubble';
  };
  attributes: {
    carrosselFotos: Schema.Attribute.Component<'component.foto', true>;
    tituloCarrossel: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.foto': ComponentFoto;
      'sections.carrossel-fotos': SectionsCarrosselFotos;
    }
  }
}
