import { Ref, ComputedRef } from 'vue';

export interface RelayDataRefs {
    lpid: ComputedRef<string>
    rpid: ComputedRef<string>
    rightScoreShown: ComputedRef<boolean>
    leftmisses: ComputedRef<number>
    rightmisses: ComputedRef<number>
    leftscore: ComputedRef<number>
    rightscore: ComputedRef<number>
    leftaccuracy: ComputedRef<number>
    rightaccuracy: ComputedRef<number>
    leftlead: ComputedRef<number>
    rightlead: ComputedRef<number>
    leftScoreShown: ComputedRef<boolean>
    rightScoreShown: ComputedRef<boolean>
    leftTwitch: Ref<string>
    rightTwitch: Ref<string>
    viewMode: Ref<ViewType>,
    leftProfilePic: ComputedRef<string>
    rightProfilePic: ComputedRef<string>
    leftRank: ComputedRef<number>
    rightRank: ComputedRef<number>
    leftlocalrank: ComputedRef<number>
    rightlocalrank: ComputedRef<number>
    leftCountry: ComputedRef<string>
    rightCountry: ComputedRef<string>
    leftname: ComputedRef<string>
    rightname: ComputedRef<string>
    mapname: ComputedRef<string>
    mapdiffname: ComputedRef<string>
    leftPlayerShown: ComputedRef<boolean>
    rightPlayerShown: ComputedRef<boolean>
    leftCountryPath: ComputedRef<string>
    rightCountryPath: ComputedRef<string>
    leftSeed: ComputedRef<number>
    rightSeed: ComputedRef<number>
}

export type ViewType = "in-map-view" | "player-info-view"