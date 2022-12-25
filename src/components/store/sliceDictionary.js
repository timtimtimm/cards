import { createSlice } from "@reduxjs/toolkit";
//localStorage.clear()
let arr = JSON.parse(localStorage.getItem("myCards"));
if (!arr) {
  arr = [];
}

const sliceDictionary = createSlice({
  name: 'dictionary',
  initialState: {
    dictionaryArray: arr,
    highlightedCell: '',
    editWord: '',
    statusTable: 'add',
    dictionarySwitch: true,
    counter: 0
  },
  reducers: {
    addNewWord(state, action) {
      state.dictionaryArray.push(
        {
          id: new Date().toISOString(),
          еnglishWord: action.payload.english,
          translationWord: action.payload.translation,
          memoryStatus: false,
          deleteStatus: false
        }
      );
      localStorage.setItem("myCards", JSON.stringify(state.dictionaryArray));
    },

    deleteWord(state, action) {
      state.dictionaryArray = state.dictionaryArray.filter(elem => elem.id != action.payload);
      localStorage.setItem("myCards", JSON.stringify(state.dictionaryArray));
    },

    editWords(state, action) {
      state.dictionaryArray.map(
        elem => {
          if (elem.id === action.payload.id) {
            elem.еnglishWord = action.payload.english;
            elem.translationWord = action.payload.translation;
          }
        }
      );
      state.highlightedCell = '';
      localStorage.setItem("myCards", JSON.stringify(state.dictionaryArray));
    },

    changeMemoryStatus(state, action) {
      state.dictionaryArray.map(
        elem => {
          if (elem.id === action.payload.id) {
            elem.memoryStatus = action.payload.status;
          }
        }
      );
      localStorage.setItem("myCards", JSON.stringify(state.dictionaryArray));
    },

    setHighlightedCell(state, action) {
      state.highlightedCell = action.payload;
      state.editWord = state.dictionaryArray.filter(elem => elem.id === action.payload);
    },

    togleStatusTable(state, action) {
      state.statusTable = action.payload;
    },

    togleDeleteStatus(state, action) {
      state.dictionaryArray.map(elem => {
        if (elem.id === action.payload) {
          elem.deleteStatus = !elem.deleteStatus;
        }
      });
    },

    onDictionarySwitch(state, action) {
      state.dictionarySwitch = !state.dictionarySwitch;
    },

    resetMemoryStatus(state, action) {
      state.dictionaryArray.map(
        elem => {   
            elem.memoryStatus = false; 
        }
      );
      localStorage.setItem("myCards", JSON.stringify(state.dictionaryArray));
    },

    setCounter(state, action) {
      state.counter++;
      if (state.counter === state.dictionaryArray.length) {
        state.counter = 0
      }
    }
  }
});

export const { addNewWord, deleteWord, editWords, changeMemoryStatus, setHighlightedCell, togleStatusTable,
  togleDeleteStatus, onDictionarySwitch, setCounter, resetMemoryStatus } = sliceDictionary.actions;
export default sliceDictionary.reducer;
