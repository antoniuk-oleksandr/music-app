import {useEffect, useState} from "react";
import {profileRequest} from "@/api/profile-request";
import {useRouter} from "next/router";
import {Profile} from "@/types/Profile";
import {getImagesForSongs, formatImageUrl, getImagesForList} from "@/utils/utils";
import {effect} from "@preact/signals-react";
import {profileBannerSignal} from "@/pages/profile/[id]/signals/profile-banner-signal";
import {profilePlaylistsSignal} from "@/pages/profile/[id]/signals/profile-playlists-signal";
import {Playlist} from "@/types/Playlist";

export const useProfileData = () => {
    const [profile, setProfile] = useState<null | Profile>(null);

    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            const id = Number.parseInt(router.query.id as string);
            const data = await profileRequest(id as number) as Profile;
            data.songs = data.songs.slice(0, 5);
            getImagesForSongs(data);
            getImagesForList(data.albums);
            getImagesForList(data.playlists);

            if (!data.user.bannerPath.includes("default")) {
                data.user.bannerPath = formatImageUrl(data.user.bannerPath);
            }
            setProfile(data);
        }

        getData();

        effect(() => {
            setProfile((prev) => {
                const newBanner = profileBannerSignal.value as string;
                if (!prev) return prev;
                return {
                    ...prev,
                    user: {
                        ...prev.user,
                        bannerPath: newBanner
                    }
                };
            });
        });

        effect(() => {
            const newPlaylist = profilePlaylistsSignal.value as Playlist;
            setProfile((prev) => {
                if (!prev) return prev;
                return {
                    ...prev,
                    playlists: [...prev.playlists, newPlaylist]
                }
            })
        })
    }, [router]);

    return profile;
}