export const DEVELOPMENT = false;
export const CANDIDATE_WEBSITE = false;
export const PARTY_WEBSITE = true;

export let home = '/home';
if (!CANDIDATE_WEBSITE && PARTY_WEBSITE) {
    home = '';
}
