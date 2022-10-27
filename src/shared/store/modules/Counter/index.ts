import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
  errorsMessage: string[];
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export const initialState: CounterState = {
  counter: 0,
  errorsMessage: [],
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const counterAsync = createAsyncThunk("contador/async", async (amount: number) => {
  const response = await new Promise<{ data: number }>((resolve) => {
    setTimeout(() => resolve({ data: amount }), 2000);
  });
  return response.data;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state, { payload: counter }: PayloadAction<CounterState["counter"]>) => {
      state.counter += counter;
    },
    decrementCounter: (state, { payload: counter }: PayloadAction<CounterState["counter"]>) => {
      state.counter -= counter;
    },
    reset: (state) => {
      state = initialState;
      console.log("novo state", state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(counterAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(counterAsync.fulfilled, (state, action) => {
        state.errorsMessage = [];
        state.counter += action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(counterAsync.rejected, (state, action: any) => {
        state.errorsMessage = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const { incrementCounter, decrementCounter, reset } = counterSlice.actions;

export default counterSlice.reducer;
