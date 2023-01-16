import { createSlice } from '@reduxjs/toolkit'

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    resumes: [], 
  },
  reducers: {
    setResumes: (state, action) => {
      console.log(action)
      state.resumes = action.payload
    }
  }
})

export const { setResumes } = resumeSlice.actions

export default resumeSlice.reducer