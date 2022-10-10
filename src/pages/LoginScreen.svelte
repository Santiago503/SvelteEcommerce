<script>
  import GoogleAuthButton from "../components/GoogleAuthButton.svelte";
  import { link, push, replace } from "svelte-spa-router";
  import { firebase, googleAuthProvider } from "../firebase/config";
  import { user } from "../stores/authStore";
  import { onMount } from "svelte";

  let email = "";
  let pass = "";

  onMount(() => {
    firebase.auth().onAuthStateChanged((userLog) => {
      console.log(userLog);
      if (userLog) {
        replace("/home");
      }
    });
  });

  const handleEmailLogin = async () => {
    if (pass.length < 6) {
      return;
    }

    if (email == "") {
      return;
    }

    const data = await firebase.auth().signInWithEmailAndPassword(email, pass);
    await user.set(data.user);
    push("/home");
  };

  const handleLoginGoogle = async () => {
    await firebase.auth().signInWithRedirect(googleAuthProvider);
    push("/home");
  };
</script>

<div class="container">
  <form on:submit|preventDefault={handleEmailLogin} class="mt-3">
    <h1>Login Screen</h1>
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
      <button
        type="submit"
        class="btn btn-primary w-100"
        on:click={handleEmailLogin}>Login</button
      >
      <GoogleAuthButton handleLogin={handleLoginGoogle} />

      <div class="text-center">
        <a
          class="text-primary text-decoration-none fs-5"
          use:link
          href="/register">Create Account</a
        >
      </div>
    </div>
  </form>
</div>
