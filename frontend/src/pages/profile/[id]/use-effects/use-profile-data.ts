import {Dispatch, useEffect, useState} from "react";
import {profileRequest} from "@/api/profile-request";
import {useRouter} from "next/router";
import {Profile} from "@/types/Profile";
import {getImagesForSongs, formatUrl, getImagesForList} from "@/utils/utils";
import {effect} from "@preact/signals-react";
import {profileBannerSignal} from "@/pages/profile/[id]/signals/profile-banner-signal";
import {profilePlaylistsSignal} from "@/pages/profile/[id]/signals/profile-playlists-signal";
import {Playlist} from "@/types/Playlist";
import {Song} from "@/types/Song";
import {profileSongSignal} from "@/pages/profile/[id]/signals/profile-song-signal";
import {TokensStatus} from "@/types/TokensStatus";
import {checkIfJWTExpired, updateJwt} from "@/utils/jwt-utils";
import {TokenInfo} from "@/types/TokenInfo";
import {UnknownAction} from "redux";
import {profileSubscribeSignal} from "@/pages/profile/[id]/signals/profile-subscribe-signal";

export const useProfileData = (
    tokenStatus: TokensStatus,
    dispatch: Dispatch<UnknownAction>
) => {
    const [profile, setProfile] = useState<null | Profile>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady || tokenStatus.signedIn === null) return;

        const getData = async () => {
            const id = Number.parseInt(router.query.id as string);

            let data;
            if (tokenStatus.signedIn) {
                const tokenInfo = tokenStatus.tokens as TokenInfo;
                let {token, expiration} = tokenInfo.jwt;
                if (checkIfJWTExpired(expiration)) {
                    ({token} = await updateJwt(tokenInfo, dispatch));
                }
                data = await profileRequest(id as number, token) as Profile;
            } else data = await profileRequest(id as number) as Profile;

            data.songs = data.songs.slice(0, 5);
            getImagesForSongs(data);
            getImagesForList(data.albums);
            getImagesForList(data.playlists);

            if (!data.user.bannerPath.includes("default")) {
                data.user.bannerPath = formatUrl(data.user.bannerPath);
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
    }, [router, tokenStatus]);

    useEffect(() => {
        effect(() => {
            const newPlaylist = profilePlaylistsSignal.value as Playlist;
            setProfile((prev) => {
                if (!prev) return prev;
                return {...prev, playlists: [newPlaylist, ...prev.playlists]}
            })
        })
    }, []);

    useEffect(() => {
        effect(() => {
            const newSong = profileSongSignal.value as Song | null;
            if (!newSong) return;
            setProfile((prev) => {
                if (!prev) return prev;
                return {...prev, songs: [newSong, ...prev.songs]}
            })
        })
    }, []);

    useEffect(() => {
        effect(() => {
            const isSubscribed = profileSubscribeSignal.value;
            if (isSubscribed === null) return;
            setProfile((prev) => {
                if (!prev) return prev;
                return {...prev, isSubscribed: isSubscribed}
            })
        })
    }, [])
    return profile;
}