export declare type PresetConfig = {
    types?: Array<PresetConfigType>;
    issuePrefixes?: Array<string>;
};
export declare type PresetConfigType = {
    type: string;
    hidden?: boolean;
    section: string;
};
