  import NotFound       from "../pages/NotFound.svelte";
  import HomeScreen     from "../pages/HomeScreen.svelte";
  import RegisterScreen from "../pages/RegisterScreen.svelte";
  import LoginScreen    from "../pages/LoginScreen.svelte";
  import ProductScreen  from "../pages/ProductScreen.svelte";

  export const routes = {
    "/"         : HomeScreen,
    "/home"     : HomeScreen,
    "/login"    : LoginScreen,
    "/register" : RegisterScreen,


    "/products" : ProductScreen,


    "*"         : NotFound
 }
