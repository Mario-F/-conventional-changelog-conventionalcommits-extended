import { PresetConfig } from './types';
export default function (config: PresetConfig): Promise<{
    headerPattern: RegExp;
    breakingHeaderPattern: RegExp;
    headerCorrespondence: string[];
    noteKeywords: string[];
    revertPattern: RegExp;
    revertCorrespondence: string[];
    issuePrefixes: string[] | undefined;
}>;
