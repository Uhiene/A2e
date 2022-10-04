import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState, getGlobalState} = createGlobalState({
    addModal: "scale-0",
    updateModal: "scale-0",
    addComment: "scale-0",
    comments: [
        "how much is your bride price?",
        "its just 1 kobo",
        "for real? i will totally marry you"
    ]
})

export {setGlobalState, useGlobalState, getGlobalState}