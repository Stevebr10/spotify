import { ArtistModel } from "./artist.model";
/* estructura de una cancion */
export interface TrackModel {
    name: string;
    album: string;
    cover: string;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}