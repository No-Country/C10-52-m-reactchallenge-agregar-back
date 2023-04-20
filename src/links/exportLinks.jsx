import axios from "axios";

const exportLinks = () => {
  const linkLogin = async (form) => {
    let data;
    await axios
      .post("https://dent-app-production.up.railway.app/users/login", form)
      .then(async (params) => (data = params.data))
      .catch((error) => console.log(error));
    if (data) {
      await localStorage.setItem("tokenDentApp", JSON.stringify(data.token));
      await localStorage.setItem("userDentApp", JSON.stringify(data.user));
    }
    return data;
  };
  const linkRegister = async (form) => {
    let data;
    await axios
      .post("https://dent-app-production.up.railway.app/users", form)
      .then(
        async (params) =>
          (data = await linkLogin({
            email: form.email,
            password: form.password,
          }))
      )
      .catch((error) => console.log(error));
    return data;
  };

  /* const linkReservation = async (form) => {
    let data;
    await axios
      .post("https://dent-app-production.up.railway.app/appointments", form)
      .then(
        async (params) => {data = await params.data}
      )
      .catch((error) => console.log(error));
      console.log(data);
    return data;
  }; */
  const linkReservation = async (form) => {
      const tokken = localStorage.getItem("tokenDentApp")
    let headers = {
        "Authorization": `Bearer ${tokken}`
    }
    let data;
    await axios
      .post("https://dent-app-production.up.railway.app/appointments", form, {headers})
      .then(async (params) => (data = params.data))
      .catch((error) => console.log(error));
      console.log(data);
    return data;
  };

  return {
    linkLogin,
    linkRegister,
    linkReservation
  };
};

export default exportLinks;
