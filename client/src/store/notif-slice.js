import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notif",
    initialState: {notification: null},
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status, 
                title: action.payload.title, 
                message: action.payload.action
            }
        }
    }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;