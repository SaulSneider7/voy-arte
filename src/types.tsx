
export interface Workshop {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface NavItem {
    label: string;
    href: string;
}

export enum ArtistProfile {
    INTERPRETER = 'Intérprete',
    COMPOSER = 'Compositor',
    PERFORMER = 'Performer Escénico',
    PRODUCER = 'Productor Musical'
}
