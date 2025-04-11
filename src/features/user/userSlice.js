import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  location: "",
};

const userData = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});
