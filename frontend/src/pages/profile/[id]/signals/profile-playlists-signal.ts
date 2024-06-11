import {signal} from "@preact/signals-react";
import {Playlist} from "@/types/Playlist";

export const profilePlaylistsSignal = signal<Playlist | null>(null);