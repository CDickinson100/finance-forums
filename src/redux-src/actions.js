export const SAVE_TOKEN = "SAVE_TOKEN";

export const SaveToken = (tokenID) => ({
    type: SAVE_TOKEN,
    payload: {
        tokenID,
    }
});