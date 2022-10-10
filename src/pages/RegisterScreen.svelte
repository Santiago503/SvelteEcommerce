<script>    
    import { link, push, replace} from "svelte-spa-router";
    import {firebase } from "../firebase/config";
    import { user } from "../stores/authStore";
    import { onMount } from "svelte";
  
    let email = "";
    let pass = "";
    let pass2 = "";
  
    onMount(() => {
      firebase.auth().onAuthStateChanged((userLog) => {
        console.log(userLog);
        if(userLog) {
          replace("/home");
        }
      })
    });
    
    const handleRegister = async () => {

        if(pass.length < 6 || pass2.length < 6  ) {
            return;
        }

        if(pass !== pass2) {
            return;
        }

        const data = await firebase.auth().createUserWithEmailAndPassword(email, pass);
        await user.set(data.user);
        push("/home");
    }
  
  </script>
  
  <div class="container">
    <form on:submit|preventDefault="{handleRegister}" class="mt-3">
      <h1>Register Screen</h1>
      <hr />
      <div class="mb-3">
        <label class="form-label w-100">
          Email Address: <input
            type="email"
            class="form-control"
            placeholder="emaple@control.com"
            bind:value={email}
          />
        </label>
      </div>
  
      <div class="mb-3">
          <label class="form-label w-100">
            Password: <input
              type="password"
              class="form-control"
              placeholder="Password"
              autocomplete="false"
              bind:value={pass}
            />
          </label>
      </div>

      <div class="mb-3">
        <label class="form-label w-100">
          Password: <input
            type="password"
            class="form-control"
            placeholder="Confirm Your Password"
            autocomplete="false"
            bind:value={pass2}
          />
        </label>
    </div>
      <div class="mb-3">
          <button type="submit" class="btn btn-primary w-100" on:click={handleRegister}>Register</button>
  
          <div class="text-center">
              <a class="text-primary text-decoration-none fs-5" use:link href="/login">Login</a>
          </div>
      </div>
    </form>
  </div>
  