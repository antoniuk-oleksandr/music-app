import {signal} from "@preact/signals-react";
import { Song } from "@/types/Song";
import {CreateSongType} from "@/types/CreateSongType";

export const profileSongSignal = signal<Song | CreateSongType | null>(null);