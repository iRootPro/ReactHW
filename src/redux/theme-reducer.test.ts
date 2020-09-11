import {changeTheme, themeReducer, themeStateType} from "./theme-reducer";

describe("Test with theme Reducer", () => {

    test("Should be theme reducer defined", () => {
        expect(themeReducer).toBeDefined()
    })

  test("Should be change theme to dark", () => {
      const initialState: themeStateType = {
          theme: "light"
      }

      const action = changeTheme("dark")
      const resultState = themeReducer(initialState, action)
      expect(resultState.theme).toBe("dark")
  })
    test("Should be change theme to light", () => {
        const initialState: themeStateType = {
            theme: "dark"
        }

        const action = changeTheme("light")
        const resultState = themeReducer(initialState, action)
        expect(resultState.theme).toBe("light")
    })
    test("Should be theme light", () => {
        const initialState: themeStateType = {
            theme: "light"
        }

        const action = changeTheme("light")
        const resultState = themeReducer(initialState, action)
        expect(resultState.theme).toBe("light")
    })
    test("Should be theme dark", () => {
        const initialState: themeStateType = {
            theme: "dark"
        }

        const action = changeTheme("dark")
        const resultState = themeReducer(initialState, action)
        expect(resultState.theme).toBe("dark")
    })
})
