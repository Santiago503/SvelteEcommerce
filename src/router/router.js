  import NotFound       from "../pages/NotFound.svelte";
  import HomeScreen     from "../pages/HomeScreen.svelte";
  import RegisterScreen from "../pages/RegisterScreen.svelte";
  import LoginScreen    from "../pages/LoginScreen.svelte";
  import ProductScreen  from "../pages/ProductScreen.svelte";
  import CartScreen from "../pages/CartScreen.svelte";
  import PaidScreen from "../pages/PaidScreen.svelte";

  export const routes = {
    "/"         : HomeScreen,
    "/home"     : HomeScreen,
    "/login"    : LoginScreen,
    "/register" : RegisterScreen,
    "/cart"     : CartScreen,
    "/paid"     : PaidScreen,


    "/products" : ProductScreen,


    "*"         : NotFound
 }
