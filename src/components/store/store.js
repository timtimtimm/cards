import { configureStore } from "@reduxjs/toolkit";
import sliceDictionary from "./sliceDictionary";

export default configureStore({
    reducer: {
        dictionary: sliceDictionary,
    }
});




